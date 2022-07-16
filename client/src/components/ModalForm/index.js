import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postContact,
  putContact,
  resetContact,
} from "../../redux/actions/contactActionFunctions";
import { setMessageInfo } from "../../redux/reducer/contactSlice";
import { validateInputs } from "../../helpers/validateForm";

import Button from "../Button";
import CloseIcon from "../CloseIcon";

import styles from "./modalForm.module.css";

function ModalForm({ setShow }) {
  const dispatch = useDispatch();

  const detailContact = useSelector((state) => state.contacts.detailContact);
  const contactType = useSelector((state) => state.contacts.contactTypes);
  const contactOrigin = useSelector((state) => state.contacts.contactOrigin);

  const token = useSelector((state) => state.users.token);

  const user = useSelector((state) => state.users.userInfo);

  useEffect(() => {
    if (detailContact) {
      setInput(detailContact);
    } else {
      setInput({
        contact_name: "",
        contact_lastName: "",
        contact_phone: "",
        contact_email: "",
        contact_brithday: "",
        contact_address: "",
        contact_origin: "",
        contact_type: "",
      });
    }
  }, [detailContact]);

  const [input, setInput] = useState({
    contact_name: "",
    contact_lastName: "",
    contact_phone: "",
    contact_email: "",
    contact_brithday: "",
    contact_address: "",
    contact_origin: "",
    contact_type: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(validateInputs({ ...input, [e.target.name]: e.target.value }));
  };

  const handleCloseModal = () => {
    if (detailContact) {
      dispatch(resetContact());
    }
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.is_admin && detailContact) {
      dispatch(
        setMessageInfo({ reset: false, message: "Usuario no autorizado" })
      );
      return;
    }

    const resultValidation = validateInputs(input);

    if (Object.keys(resultValidation).length === 0) {
      if (detailContact) {
        dispatch(
          putContact(
            { ...input, contact_updated_by: user.email },
            detailContact._id,
            token
          )
        );
        handleCloseModal();
      } else {
        dispatch(
          postContact({ ...input, contact_created_by: user.email }, token)
        );
        setInput({
          contact_name: "",
          contact_lastName: "",
          contact_phone: "",
          contact_email: "",
          contact_brithday: "",
          contact_address: "",
          contact_origin: "",
          contact_type: "",
        });
      }
    } else {
      setErrors(resultValidation);
    }
  };

  return (
    <div className={styles.show_modal_form}>
      <div className={styles.form_container}>
        <div className={styles.btn_close}>
          <Button onClick={handleCloseModal} circle={true}>
            <CloseIcon stroke="white" />
          </Button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h4>
            {detailContact ? "Actualizar contacto" : "Registrar contacto"}
          </h4>
          <div className={styles.overflow_form}>
            <div className={styles.input_text_container}>
              <input
                className={styles.input}
                name="contact_name"
                type="text"
                placeholder="Nombres"
                value={input?.contact_name}
                onChange={handleChange}
              />
              {errors?.contact_name ? (
                <span className={styles.span_error}>
                  {errors?.contact_name}
                </span>
              ) : (
                <span className={styles.empty_span}>""</span>
              )}
            </div>
            <div className={styles.input_text_container}>
              <input
                className={styles.input}
                name="contact_lastName"
                type="text"
                placeholder="Apellidos"
                value={input?.contact_lastName}
                onChange={handleChange}
              />
              {errors?.contact_lastName ? (
                <span className={styles.span_error}>
                  {errors?.contact_lastName}
                </span>
              ) : (
                <span className={styles.empty_span}>""</span>
              )}
            </div>
            <div className={styles.input_text_container}>
              <input
                className={styles.input}
                name="contact_email"
                type="email"
                placeholder="Email"
                value={input?.contact_email}
                onChange={handleChange}
              />
              {errors?.contact_email ? (
                <span className={styles.span_error}>
                  {errors?.contact_email}
                </span>
              ) : (
                <span className={styles.empty_span}>""</span>
              )}
            </div>
            <div className={styles.input_text_container}>
              <input
                className={styles.input}
                name="contact_phone"
                type="phone"
                placeholder="Cel/Tex"
                value={input?.contact_phone}
                onChange={handleChange}
              />
              {errors?.contact_phone ? (
                <span className={styles.span_error}>
                  {errors?.contact_phone}
                </span>
              ) : (
                <span className={styles.empty_span}>""</span>
              )}
            </div>
            <div className={styles.input_text_container}>
              <input
                className={styles.input}
                name="contact_brithday"
                type="date"
                placeholder="Fecha de nacimiento"
                value={input?.contact_brithday}
                onChange={handleChange}
              />
              {errors?.contact_brithday ? (
                <span className={styles.span_error}>
                  {errors?.contact_brithday}
                </span>
              ) : (
                <span className={styles.empty_span}>""</span>
              )}
            </div>
            <div className={styles.input_text_container}>
              <input
                className={styles.input}
                name="contact_address"
                type="text"
                placeholder="Dirección"
                value={input?.contact_address}
                onChange={handleChange}
              />
              {errors?.contact_address ? (
                <span className={styles.span_error}>
                  {errors?.contact_address}
                </span>
              ) : (
                <span className={styles.empty_span}>""</span>
              )}
            </div>
            <div className={styles.select_container}>
              <select
                className={styles.select}
                value={input?.contact_type}
                onChange={handleChange}
                name="contact_type"
              >
                <option value="" disabled>
                  Tipo de contacto
                </option>
                {contactType &&
                  contactType.map((cType) => (
                    <option key={cType} value={cType}>
                      {cType}
                    </option>
                  ))}
              </select>
              {errors?.contact_type ? (
                <span className={styles.span_error}>
                  {errors?.contact_type}
                </span>
              ) : (
                <span className={styles.empty_span}>""</span>
              )}
            </div>
            <div className={styles.select_container}>
              <select
                className={styles.select}
                value={input?.contact_origin}
                onChange={handleChange}
                name="contact_origin"
              >
                <option value="" disabled>
                  Origen
                </option>
                {contactOrigin &&
                  contactOrigin.map((cOrigin) => (
                    <option key={cOrigin} value={cOrigin}>
                      {cOrigin}
                    </option>
                  ))}
              </select>
              {errors?.contact_origin ? (
                <span className={styles.span_error}>
                  {errors?.contact_origin}
                </span>
              ) : (
                <span className={styles.empty_span}>""</span>
              )}
            </div>
            <Button>{detailContact ? "Actualizar" : "Crear"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
