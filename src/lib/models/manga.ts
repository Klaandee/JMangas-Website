import { Schema, model } from "mongoose";

const mangaSchema = new Schema({
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
});

const Manga = model("Manga", mangaSchema);
