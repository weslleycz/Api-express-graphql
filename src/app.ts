import * as dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { graphql } from "./graphql";
import { router } from "./routes";
dotenv.config();

const app = express();

app.use("/graphql", graphqlHTTP(graphql));

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started on port:${process.env.PORT}`);
  console.log(`🔮 Server graphql on port:${process.env.PORT}/graphql`);
});
