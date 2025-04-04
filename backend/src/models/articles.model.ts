import { Schema, model } from "mongoose";

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },
    keyword: {
      type: String,
      required: false,
      maxlength: 100,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      maxlength: 500,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Article", articleSchema);
