import {
  getInfoController,
  getAllContactsController,
  createContactController,
  updateContactController,
  deleteContactController,
} from "../controllers/contacts.controllers.js";

export const getAllContacts = (req, res) => {
  getAllContactsController()
    .then((contacts) => {
      res.send(contacts);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
};

export const createContact = (req, res) => {
  createContactController(req.body)
    .then((contact) => {
      res.send(contact);
    })
    .catch((error) => {
      console.log("ERROR CREATE IN SERVICE", error);
      res.status(400).json({ message: error.message });
    });
};

export const updateContact = (req, res) => {
  const { id } = req.params;

  const data = req.body;

  const { is_admin } = req.user;

  if (!is_admin) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    updateContactController(id, data)
      .then((updatedContact) => {
        res.send(updatedContact);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({ message: error.message });
      });
  }
};

export const deleteContact = (req, res) => {
  const { id } = req.params;

  const { is_admin } = req.user;

  if (!is_admin) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    deleteContactController(id)
      .then((contactDeleted) => {
        res.send(contactDeleted);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({ message: error.message });
      });
  }
};

export const getInfo = (req, res) => {
  const info = getInfoController();
  res.send(info);
};
