import { useState } from "react";
import { useDispatch } from "react-redux";
import { detailContact } from "../redux/actions/contactActionFunctions";

export const useCommunicationWay = () => {
  const dispatch = useDispatch();
  const [showCommunicationWay, setShowCommunicationWay] = useState(false);

  const handleCommunicationWay = (id) => {
    setShowCommunicationWay(true);
    dispatch(detailContact(id));
  };
  return {
    handleCommunicationWay,
    showCommunicationWay,
    setShowCommunicationWay,
  };
};
