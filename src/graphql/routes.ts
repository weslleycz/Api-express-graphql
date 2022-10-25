import { listUsers } from "./controllers/user/listUse";
import { createUser } from "./controllers/user/createUser";
import { loginUser } from "./controllers/user/loginUser";
import { createProject } from "./controllers/project/createProject";

export const routes = {
  listUsers,
  createUser,
  loginUser,
  createProject
};
