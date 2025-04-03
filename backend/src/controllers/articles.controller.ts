import articlesService from "../services/articles.service";
import { httpStatus, sendJsonSuccess } from "../helpers/response.helper";
import { Request, Response } from "express";
const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await articlesService.getAllArticle(req, res);
    sendJsonSuccess(
      res,
      articles,
      httpStatus.OK.statusCode,
      httpStatus.OK.message
    );
  } catch (error) {
    sendJsonSuccess(
      res,
      null,
      httpStatus.SERVER_ERROR.statusCode,
      httpStatus.SERVER_ERROR.message
    );
  }
};
const getArticle = async (req: Request, res: Response) => {
  try {
    const article = await articlesService.getArticleById(req, res);
    sendJsonSuccess(
      res,
      article,
      httpStatus.OK.statusCode,
      httpStatus.OK.message
    );
  } catch (error) {
    sendJsonSuccess(
      res,
      null,
      httpStatus.SERVER_ERROR.statusCode,
      httpStatus.SERVER_ERROR.message
    );
  }
};
const createdArticle = async (req: Request, res: Response) => {
  try {
    const article = await articlesService.createdArticle(req, res);
    sendJsonSuccess(
      res,
      article,
      httpStatus.CREATED.statusCode,
      httpStatus.CREATED.message
    );
  } catch (error) {
    sendJsonSuccess(
      res,
      null,
      httpStatus.SERVER_ERROR.statusCode,
      httpStatus.SERVER_ERROR.message
    );
  }
};
export default {
  getAllArticles,
  getArticle,
  createdArticle,
};
