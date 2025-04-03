import express from "express";
import articles from "./routes/v1/articles.route";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1/", articles);
export default app;
