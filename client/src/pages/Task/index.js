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

import styles from "./task.module.css";

function Tasks() {
  const infoMessage = useSelector((state) => state.contacts.messageInfo);
  const loading = useSelector((state) => state.contacts.loading);
  const data = useSelector(
    (state) => state.contacts.detailContactForCommAndTask
  );

  const { client } = useContactInfo(data?._id);

  const user = useSelector((state) => state.users);

  return (
    <section className={styles.container}>
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <h1 className={styles.title}>Tareas</h1>
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
            <div className={styles.commentsList}>
              {client?.comments
                ?.filter((c) => !c.comment_deleted)
                .map((comment) => (
                  <div key={comment._id} className={styles.bubbleComment}>
                    <span>{comment.createdAt}</span>
                    <p>{comment.comment}</p>
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

export default Tasks;
