import { configureStore } from "@reduxjs/toolkit";
import contacts from "../reducer/contactSlice";
import users from "../reducer/userSlice";

const reducer = {
  contacts,
  users,
};

export default configureStore({
  reducer,
});
