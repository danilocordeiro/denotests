import db from "../db.ts";

interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
}

let users: Array<IUser> = [{
  id: "1",
  email: "ad@mail.com",
  name: "Ad nome",
  password: "1234567",
}, {
  id: "2",
  email: "ad2@mail.com",
  name: "Ad 2 nome",
  password: "1234567",
}, {
  id: "3",
  email: "ad3@mail.com",
  name: "Ad 3 nome",
  password: "1234567",
}];

const getUsers = async (context: any) => {
  try {
    const result = await db.query({
      text: 'SELECT * FROM "users";',
    });
    context.response.body = result.rowsOfObjects();
  } catch (error) {
    console.log(error);
    context.throw(error);
  }
};

const getUserById = async (context: any) => {
  if (context.params && context.params.id) {
    const result = await db.query({
      text: 'SELECT * FROM "users" WHERE id = $1;',
      args: [context.params.id],
    });
    context.response.body = result.rowsOfObjects()[0];
  }
};

const createUser = async (context: any) => {
  try {
    console.log(context);

    if (context.request.hasBody) {
      const body = await context.request.body({
        contentTypes: {
          text: ["application/javascript"],
        },
      });
      const data = body.value;
      const result = await db.query({
        text:
          'INSERT INTO "users" (email, name, password) VALUES ($1, $2, $3) RETURNING *;',
        args: [data.email, data.name, data.password],
      });
      context.response.body = result.rowsOfObjects()[0];
    }
  } catch (error) {
    console.log(error);
    context.throw(error);
  }
};

export { getUsers, getUserById, createUser };
