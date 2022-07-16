import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String },
    contact_id: { type: mongoose.Schema.Types.ObjectId },
    comment_deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
