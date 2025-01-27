import mongoose from "mongoose";
import { MONGODB_URI } from "@/config";

if (!MONGODB_URI) {
  throw new Error(
    "Por favor define la variable MONGODB_URI en tu archivo .env.local"
  );
}

let globalForMongoose = global as typeof globalThis & {
  mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
};

if (!globalForMongoose.mongoose) {
  globalForMongoose.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (globalForMongoose.mongoose.conn) {
    return globalForMongoose.mongoose.conn;
  }

  if (!globalForMongoose.mongoose.promise) {
    globalForMongoose.mongoose.promise = mongoose
      .connect(MONGODB_URI, {})
      .then((m) => m);
  }

  globalForMongoose.mongoose.conn = await globalForMongoose.mongoose.promise;
  return globalForMongoose.mongoose.conn;
}

export default dbConnect;
