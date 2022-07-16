import {
  createCommentController,
  removeCommentController,
  updateCommentController,
} from "../controllers/comments.controllers.js";

export const createComment = async (req, res) => {
  const { contact_id, comment } = req.body;

  createCommentController(contact_id, comment)
    .then((createdComment) => {
      res.send(createdComment);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};

export const removeComment = (req, res) => {
  const { comment_id } = req.body;

  const data = req.body;

  removeCommentController(comment_id, data)
    .then((removedComment) => {
      res.send(removedComment);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ message: error.message });
    });
};

export const updateComment = (req, res) => {
  const { comment_id } = req.body;

  const data = req.body;

  updateCommentController(comment_id, data)
    .then((updatedComment) => {
      res.send(updatedComment);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ message: error.message });
    });
};
