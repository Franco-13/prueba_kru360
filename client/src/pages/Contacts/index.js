import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchContacts } from "../../hooks/useFetchContacts";
import { useCreateAndUpdateModal } from "../../hooks/useCreateAndUpdateModal";
import { useRemoveModal } from "../../hooks/useRemoveModal";
import { searchContactsByName } from "../../redux/actions/contactActionFunctions";
import { resetSearchContact } from "../../redux/reducer/contactSlice";
import { useCommunicationWay } from "../../hooks/useCommunicationWay";

import Button from "../../components/Button";
import ModalForm from "../../components/ModalForm";
import ModalRemoveContact from "../../components/ModalRemoveContact";
import SearchBar from "../../components/SearchBar";
import ContactItem from "../../components/ContactItem";
import Loading from "../../components/Loading";
import ModalMessageInfo from "../../components/ModalMessageInfo";
import ModalCommunicationWay from "../../components/ModalCommunicationWay";

import styles from "./contacts.module.css";

function Contacts() {
  const { contacts } = useFetchContacts();
  const loading = useSelector((state) => state.contacts.loading);
  const infoMessage = useSelector((state) => state.contacts.messageInfo);

  const { handleCreateModal, handleUpdateModal, setShowModal, showModal } =
    useCreateAndUpdateModal();

  const { handleRemove, setShowModalRemove, showModalRemove } =
    useRemoveModal();

  const dispatch = useDispatch();

  const filterList = useSelector((state) => state.contacts.filterList);

  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    if (e.target.value === "") {
      dispatch(resetSearchContact());
    }
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    dispatch(searchContactsByName(search));
  };

  const {
    handleCommunicationWay,
    showCommunicationWay,
    setShowCommunicationWay,
  } = useCommunicationWay();

  const arrayList = filterList ? filterList : contacts;

  return (
    <section className={styles.container}>
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <h1 className={styles.title}>Contactos</h1>
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          search={search}
          handleSearch={handleSearch}
        />
        <div className={styles.createButtonContainer}>
          <Button
            onClick={handleCreateModal}
            children="Registrar nuevo contacto"
          />
        </div>
      </div>
      <div className={styles.contactList}>
        {arrayList &&
          arrayList?.map((contact) => (
            <ContactItem
              key={contact._id}
              handleRemoveContact={() => handleRemove(contact._id)}
              handleUpdateContact={() => handleUpdateModal(contact._id)}
              handleCommunicationWay={() => handleCommunicationWay(contact._id)}
              name={contact.contact_name}
              lastName={contact.contact_lastName}
              phone={contact.contact_phone}
              id={contact._id}
            />
          ))}
      </div>
      {loading && <Loading />}

      {infoMessage?.length > 0 && (
        <ModalMessageInfo infoMessage={infoMessage} />
      )}

      {showModal && <ModalForm setShow={setShowModal} />}

      {showModalRemove && <ModalRemoveContact setShow={setShowModalRemove} />}

      {showCommunicationWay && (
        <ModalCommunicationWay setShow={setShowCommunicationWay} />
      )}
    </section>
  );
}

export default Contacts;
