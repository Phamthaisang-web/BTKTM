import { Schema, model } from "mongoose";
const articleSchema = new Schema(
  {
    title: {
      type: String,
    },
    keyword: {
      type: String,
    },
    description: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Article", articleSchema);
