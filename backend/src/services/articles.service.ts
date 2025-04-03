import { Request, Response } from "express";
import articlesModel from "../models/articles.model";

const getAllArticle = (req: Request, res: Response) => {
  const article = articlesModel.find();
  return article;
};
const getArticleById = (req: Request, res: Response) => {
  const id = req.params.id;
  const article = articlesModel.findById(id);

  return article;
};
const createdArticle = (req: Request, res: Response) => {
  const article = articlesModel.create(req.body);
  return article;
};
export default { getAllArticle, getArticleById, createdArticle };
