import * as dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { setupReactViews } from "express-tsx-views";
import path, { resolve } from "path";
import { graphql } from "./graphql";
import { router } from "./routes";
dotenv.config();

const app = express();

app.use("/graphql", graphqlHTTP(graphql));

setupReactViews(app, {
  viewsDirectory: resolve(__dirname, "views"),
  prettify: false,
});

const statics = path.join(__dirname, "./public");

app.get("/static/:file", function (req, res) {
  const file = req.params.file;
  res.sendFile(path.join(statics, file));
});

app.use("/static", express.static(statics));

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started on port:${process.env.PORT}`);
  console.log(`🔮 Server graphql on port:${process.env.PORT}/graphql`);
});
