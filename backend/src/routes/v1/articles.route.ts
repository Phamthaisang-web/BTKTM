import articlesController from "../../controllers/articles.controller";
import express from "express";
import validateSchemaYup from "../../middleware/validate.middleware";
import articlesValidation from "../../validations/articles.validation";
import { NextFunction, Request, Response } from "express";
const router = express.Router();
const routerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next();
};
router.use(routerMiddleware);

router.get(
  "/articles",
  validateSchemaYup(articlesValidation.getAllArticleSchema),
  articlesController.getAllArticles
);
router.get(
  "/articles/:id",
  validateSchemaYup(articlesValidation.getArticleByIdSchema),
  articlesController.getArticle
);
router.post(
  "/articles",
  validateSchemaYup(articlesValidation.createArticleSchema),
  articlesController.createdArticle
);
export default router;
