import { Schema, model, models } from "mongoose";

const mangaSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      required: true,
    },
    cover: {
      url: {
        type: String,
        required: true,
      },
      deletehash: {
        type: String,
        required: true,
      },
    },
    banner: {
      url: {
        type: String,
        required: true,
      },
      deletehash: {
        type: String,
        required: true,
      },
    },
    chapters: {
      type: Schema.Types.ObjectId,
      ref: "Chapter",
    },
  },
  {
    timestamps: true,
  }
);

const Manga = models.Manga || model("Manga", mangaSchema);

export default Manga;
