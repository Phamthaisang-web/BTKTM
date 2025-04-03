import articlesController from "../../controllers/articles.controller";
import express from "express";
const router = express.Router();
router.get("/articles", articlesController.getAllArticles);
router.get("/articles/:id", articlesController.getArticle);
router.post("/articles", articlesController.createdArticle);
export default router;
