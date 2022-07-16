import { useState } from "react";
import { useDispatch } from "react-redux";
import { detailContact } from "../redux/actions/contactActionFunctions";

export const useRemoveModal = () => {
  const dispatch = useDispatch();

  const [showModalRemove, setShowModalRemove] = useState(false);

  const handleRemove = (id) => {
    dispatch(detailContact(id));
    setShowModalRemove(true);
  };

  return { showModalRemove, setShowModalRemove, handleRemove };
};
