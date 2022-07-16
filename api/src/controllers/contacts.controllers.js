import { CONTACT_ORIGIN, CONTACT_TYPES } from "../helpers/constants.js";
import Contact from "../models/Contact.js";

export const getAllContactsController = () => {
  return Contact.find()
    .populate("comments")
    .then((contacts) => {
      return contacts;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.message);
    });
};

export const createContactController = (data) => {
  const newContact = new Contact(data);

  return newContact
    .save()
    .then((contact) => {
      return contact;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.message);
    });
};

export const updateContactController = (id, data) => {
  return Contact.findByIdAndUpdate(id, data, { new: true })
    .then((updatedContact) => {
      return updatedContact;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.message);
    });
};

export const deleteContactController = (id) => {
  return Contact.findByIdAndDelete(id)
    .then((deletedContact) => {
      return deletedContact;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.message);
    });
};

export const getInfoController = () => {
  return { contactTypes: CONTACT_TYPES, contactOrigin: CONTACT_ORIGIN };
};
