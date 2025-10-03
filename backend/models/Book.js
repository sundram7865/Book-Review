import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, index: "text" },
  author: { type: String, required: true, index: "text" },
  description: String,
  genre: String,
  year: Number,
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
export default Book;
