import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getUsers,
  getUserById,
  createUser,
} from "./controllers/user.controller.ts";

const router = new Router();

router.get("/users", getUsers)
  .get("/users/:id", getUserById)
  .post("/users", createUser);

export default router;
