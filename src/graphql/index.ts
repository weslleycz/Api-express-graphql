import { routes } from "./routes";
import { schema } from "./schema";
export const graphql = {
  schema: schema,
  rootValue: routes,
  graphiql: true,
};
