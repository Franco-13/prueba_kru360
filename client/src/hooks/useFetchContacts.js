import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllContacts,
  fetchTypeAndOriginContact,
} from "../redux/actions/contactActionFunctions";

export const useFetchContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.list);

  useEffect(() => {
    dispatch(fetchTypeAndOriginContact());
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return { contacts };
};
