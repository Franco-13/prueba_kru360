import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContactInfo } from "../../hooks/useContactInfo";
import {
  postComment,
  putComment,
  removeComment,
} from "../../redux/actions/commentActionFunctions";

import Button from "../../components/Button";
import Loading from "../../components/Loading";
import ModalMessageInfo from "../../components/ModalMessageInfo";
import RemoverIcon from "../../components/RemoverIcon";
import UpdaterIcon from "../../components/UpdaterIcon";

import styles from "./comments.module.css";

function Comments() {
  const infoMessage = useSelector((state) => state.contacts.messageInfo);
  const loading = useSelector((state) => state.contacts.loading);
  const data = useSelector(
    (state) => state.contacts.detailContactForCommAndTask
  );

  const dispatch = useDispatch();

  const { client } = useContactInfo(data?._id);

  const [newComment, setNewComment] = useState("");
  const [updateComment, setUpdateComment] = useState(false);
  const [commentID, setCommentID] = useState("");
  const user = useSelector((state) => state.users);

  const handleComment = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = () => {
    const newCommentObject = {
      comment: newComment,
      contact_id: client?._id,
    };

    const updateCommentObject = {
      comment: newComment,
      contact_id: client?._id,
      comment_id: commentID,
    };

    const token = user.token;
    if (!newComment.length) {
      alert("Es necesario un comentario");
      return;
    }
    if (!updateComment) {
      dispatch(postComment(newCommentObject, token));
      setNewComment("");
    } else {
      dispatch(putComment(updateCommentObject, token));
      setNewComment("");
      setUpdateComment(false);
    }
  };

  const handleDeleteComment = (comment) => {
    const token = user.token;

    const commentToDelete = {
      comment_id: comment._id,
      contact_id: comment.contact_id,
      comment_deleted: true,
    };
    dispatch(removeComment(commentToDelete, token));
  };

  return (
    <section className={styles.container}>
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <h1 className={styles.title}>Comentarios</h1>
      </div>
      <div className={styles.contactList}>
        <details open className={styles.detailContact}>
          <summary>Datos del contacto</summary>
          <div className={styles.contactData}>
            {client && (
              <>
                <p>{`${client?.contact_name} ${client?.contact_lastName}`}</p>
                <span>{client?.contact_phone}</span>
                <span>{client?.contact_email}</span>
                <span>{client?.contact_address}</span>
                <span>{client?.contact_brithday}</span>
              </>
            )}
          </div>
        </details>

        {/* COMENTARIOS */}
        <details className={styles.commentsSection}>
          <summary>Comentarios</summary>
          <div className={styles.commentContainer}>
            <textarea
              name="comment"
              value={newComment}
              onChange={handleComment}
            />
            <Button
              children={updateComment ? "Actualizar" : "Agregar"}
              onClick={handleSubmitComment}
            />
            {updateComment && (
              <Button
                secondary
                onClick={() => {
                  setUpdateComment(false);
                  setNewComment("");
                }}
                children="Cancelar"
              />
            )}
            <div className={styles.commentsList}>
              {client?.comments
                ?.filter((c) => !c.comment_deleted)
                .map((comment) => (
                  <div key={comment._id} className={styles.bubbleComment}>
                    <span>{comment.createdAt}</span>
                    <p>{comment.comment}</p>
                    <section className={styles.contactActionButtons}>
                      <button
                        onClick={() => {
                          setNewComment(comment.comment);
                          setCommentID(comment._id);
                          setUpdateComment(true);
                        }}
                        title="Update"
                      >
                        <UpdaterIcon stroke="#4caf50" />
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment)}
                        title="Remove"
                      >
                        <RemoverIcon stroke="crimson" />
                      </button>
                    </section>
                  </div>
                ))}
            </div>
          </div>
        </details>

        {/* COMENTARIOS ELIMINADOS */}
        {user?.userInfo.is_admin && (
          <details className={styles.commentsSection}>
            <summary>Comentarios eliminados</summary>
            <div className={styles.commentsList}>
              {client?.comments
                ?.filter((c) => c.comment_deleted)
                .map((comment) => (
                  <div key={comment._id} className={styles.bubbleComment}>
                    <p>{comment.comment}</p>
                  </div>
                ))}
            </div>
          </details>
        )}

        {/* TAREAS */}
        <details className={styles.taskSection}>
          <summary>Tareas</summary>
          <div className={styles.tasksList}>
            <div className={styles.bubbleComment}>
              <p>"task"</p>
            </div>
          </div>
        </details>
      </div>
      {loading && <Loading />}
      {infoMessage?.length > 0 && (
        <ModalMessageInfo infoMessage={infoMessage} />
      )}
    </section>
  );
}

export default Comments;
