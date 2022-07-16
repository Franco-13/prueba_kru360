import React from "react";
import { useContactCommentTaskInfo } from "../../hooks/useContactCommentTaskInfo";

import ComunicationIcon from "../ComunicationIcon";
import RemoverIcon from "../RemoverIcon";
import UpdaterIcon from "../UpdaterIcon";

import styles from "./contactItem.module.css";

function ContactItem({
  handleRemoveContact,
  handleUpdateContact,
  handleCommunicationWay,
  name,
  lastName,
  phone,
  id,
}) {
  const { handleContactId } = useContactCommentTaskInfo(id);

  return (
    <div className={styles.contactItemContainer}>
      <section className={styles.contactData}>
        <div
          onClick={handleContactId}
          className={styles.anchor}
          to={`/comments`}
        >
          <p>{`${name} ${lastName}`}</p>
        </div>
        <span>{phone}</span>
      </section>
      <section className={styles.contactActionButtons}>
        <button title="Update" onClick={handleUpdateContact}>
          <UpdaterIcon stroke="#4caf50" />
        </button>
        <button title="Communication" onClick={handleCommunicationWay}>
          <ComunicationIcon stroke="blue" />
        </button>
        <button title="Remove" onClick={handleRemoveContact}>
          <RemoverIcon stroke="crimson" />
        </button>
      </section>
    </div>
  );
}

export default ContactItem;
