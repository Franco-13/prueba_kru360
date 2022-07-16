import Comment from "../models/Comment.js";
import Contact from "../models/Contact.js";

export const createCommentController = async (id, data) => {
  const contact = await Contact.findById(id);
  try {
    const newComment = new Comment({
      comment: data,
      contact_id: contact._id,
    });

    const savedComment = await newComment.save();

    contact.comments = contact.comments.concat(savedComment._id);
    await contact.save();

    return savedComment;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const removeCommentController = (id, data) => {
  return Comment.findByIdAndUpdate(id, data, { new: true })
    .then((removedComment) => {
      return removedComment;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.message);
    });
};

export const updateCommentController = (id, data) => {
  return Comment.findByIdAndUpdate(id, data, { new: true })
    .then((updatedComment) => {
      return updatedComment;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.message);
    });
};
