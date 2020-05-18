import { Client } from "https://deno.land/x/postgres/mod.ts";

const client = new Client({
  user: "postgres",
  database: "deno",
  hostname: "localhost",
  password: "postgres",
  port: 5432,
});

await client.connect();

export default client;
