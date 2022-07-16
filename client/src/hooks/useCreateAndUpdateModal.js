import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  detailContact,
  resetContact,
} from "../redux/actions/contactActionFunctions";

export const useCreateAndUpdateModal = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [update, setUpdate] = useState(false);

  const handleCreateModal = () => {
    dispatch(resetContact());
    setUpdate(false);
    setShowModal(true);
  };

  const handleUpdateModal = (id) => {
    setUpdate(true);
    setShowModal(true);
    dispatch(detailContact(id));
  };

  return {
    showModal,
    update,
    handleCreateModal,
    handleUpdateModal,
    setShowModal,
  };
};
