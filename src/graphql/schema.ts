import { buildSchema } from "graphql";
import { User } from "./controllers/user/User.dto";

const Status = `type Status{
  status:String,
  has_error:Boolean
}`;

export const schema = buildSchema(`
${User}

${Status}

type Query {
  listUsers: [User]
}

type Mutation {
  createUser(name:String, email: String, password: String):Status
}
`);
