import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts } from "../redux/actions/contactActionFunctions";

export const useContactInfo = (id) => {
  const dispatch = useDispatch();

  const [client] = useSelector((state) =>
    state.contacts.list?.filter((client) => client._id === id)
  );

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return { client };
};
