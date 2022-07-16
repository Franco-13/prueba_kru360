import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/actions/contactActionFunctions";
import { setMessageInfo } from "../../redux/reducer/contactSlice";

import Button from "../Button";

import styles from "./modalRemoveContact.module.css";

function ModalRemoveContact({ setShow }) {
  const dispatch = useDispatch();

  const detailContact = useSelector((state) => state.contacts.detailContact);
  const token = useSelector((state) => state.users.token);
  const user = useSelector((state) => state.users.userInfo);

  const handleRemoveContact = () => {
    if (!user.is_admin) {
      dispatch(
        setMessageInfo({ reset: false, message: "Usuario no autorizado" })
      );
      setTimeout(() => {
        setShow(false);
      }, 500);
      return;
    }

    dispatch(removeContact({ id: detailContact._id }, token));
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <div className={styles.show_modal_remove}>
      <div className={styles.modal_container}>
        <h4>
          {detailContact &&
            `Esta acción eliminará cliente con ID: ${detailContact._id} completamente`}
        </h4>
        <div className={styles.btn_container}>
          <Button
            secondary={true}
            children="Aceptar"
            onClick={handleRemoveContact}
          />
          <Button children="Cancelar" onClick={() => setShow(false)} />
        </div>
      </div>
    </div>
  );
}

export default ModalRemoveContact;
