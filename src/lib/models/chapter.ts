import { Schema, model, models } from "mongoose";

const chapterSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pages: {
    type: [String],
    required: true,
  },
});

const Chapter = models.Chapter || model("Chapter", chapterSchema);

export default Chapter;
