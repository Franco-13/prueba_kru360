import React from "react";
import { useSelector } from "react-redux";

import Button from "../Button";
import CloseIcon from "../CloseIcon";
import PhoneIcon from "../PhoneIcon";
import SmsIcon from "../SmsIcon";
import WAppIcon from "../WAppIcon";

import styles from "./modalCommunicationWay.module.css";

function ModalCommunicationWay({ setShow }) {
  const contact = useSelector((state) => state.contacts.detailContact);

  return (
    <section className={styles.comunicationWay}>
      <div className={styles.comunicationWayContainer}>
        <div className={styles.btn_close}>
          <Button onClick={() => setShow(false)} circle={true}>
            <CloseIcon stroke="white" />
          </Button>
        </div>
        <div className={styles.communicationLinks}>
          <a
            className={styles.communicationType}
            target="_blank"
            rel="noreferrer"
            href={`tel:${contact.contact_phone}`}
          >
            <span>Llamada telefónica</span> <PhoneIcon stroke="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://api.whatsapp.com/send?phone=${contact.contact_phone}&text=Hola%20${contact.contact_name}!`}
            className={styles.communicationType}
          >
            <span>WhatsApp</span>
            <WAppIcon />
          </a>
          <a
            className={styles.communicationType}
            target="_blank"
            rel="noreferrer"
            href={`sms:${contact.contact_phone}`}
          >
            <span>Mensaje de texto</span> <SmsIcon stroke="black" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ModalCommunicationWay;
