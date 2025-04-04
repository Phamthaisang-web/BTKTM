import * as yup from "yup";

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

const createArticleSchema = yup
  .object({
    body: yup.object({
      title: yup
        .string()
        .required("Title is required")
        .max(200, "Title must not exceed 200 characters"),
      keyword: yup
        .string()
        .max(100, "Keyword must not exceed 100 characters")
        .optional(),
      description: yup
        .string()
        .max(500, "Description must not exceed 500 characters")
        .optional(),
      content: yup.string().required("Content is required"),
    }),
  })
  .required();

const updateArticleSchema = yup
  .object({
    params: yup.object({
      id: yup
        .string()
        .matches(objectIdRegex, "Invalid ObjectId")
        .required("ID is required"),
    }),
    body: yup.object({
      title: yup.string().max(200).optional(),
      keyword: yup.string().max(100).optional(),
      description: yup.string().max(500).optional(),
      content: yup.string().optional(),
    }),
  })
  .required();
const getArticleByIdSchema = yup
  .object({
    params: yup.object({
      id: yup
        .string()
        .matches(objectIdRegex, "Invalid ObjectId")
        .required("ID is required"),
    }),
  })
  .required();
const getAllArticleSchema = yup
  .object({
    query: yup.object({
      page: yup.number().integer().positive().optional(),
      limit: yup.number().integer().positive().optional(),
      keyword: yup.string().min(3).max(100).optional(),
    }),
  })
  .required();

export default {
  createArticleSchema,
  updateArticleSchema,
  getArticleByIdSchema,
  getAllArticleSchema,
};
