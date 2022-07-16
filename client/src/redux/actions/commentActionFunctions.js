import {
  setDetailContactForCommAndTask,
  setMessageInfo,
} from "../reducer/contactSlice";
import { fetchAllContacts, setLoadingStatus } from "./contactActionFunctions";

export const postComment = (payload, token) => {
  return function (dispatch) {
    dispatch(setLoadingStatus(true));
    return fetch(`${process.env.REACT_APP_API}/comment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("DATA", data);
        if (data.message) {
          throw Error(data.message);
        }
        dispatch(
          setMessageInfo({ reset: false, message: "Comentario creado." })
        );
        dispatch(fetchAllContacts());
        dispatch(setLoadingStatus(false));
      })
      .catch((error) => {
        dispatch(setLoadingStatus(false));
        console.log(error);
      });
  };
};

export const removeComment = (payload, token) => {
  return function (dispatch) {
    dispatch(setLoadingStatus(true));
    return fetch(`${process.env.REACT_APP_API}/comment`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message || data.error) {
          throw new Error(data.message || data.error);
        }
        dispatch(
          setMessageInfo({ reset: false, message: "Comentario eliminado" })
        );
        dispatch(fetchAllContacts());
        dispatch(setLoadingStatus(false));
      })
      .catch((error) => {
        console.error(error.message);
        dispatch(setLoadingStatus(false));
        if (error.message === "Unauthorized") {
          dispatch(
            setMessageInfo({ reset: false, message: "Usuario no autorizado" })
          );
        }
        if (error.message === "User does not exist") {
          dispatch(
            setMessageInfo({ reset: false, message: "Usuario no autorizado" })
          );
        }
      });
  };
};

export const putComment = (payload, token) => {
  return function (dispatch) {
    dispatch(setLoadingStatus(true));
    return fetch(`${process.env.REACT_APP_API}/comment`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message || data.error) {
          throw new Error(data.message || data.error);
        }
        dispatch(
          setMessageInfo({ reset: false, message: "Comentario actualizado" })
        );
        dispatch(fetchAllContacts());
        dispatch(setLoadingStatus(false));
      })
      .catch((error) => {
        console.error(error.message);
        dispatch(setLoadingStatus(false));
        if (error.message === "Unauthorized") {
          dispatch(
            setMessageInfo({ reset: false, message: "Usuario no autorizado" })
          );
        }
        if (error.message === "User does not exist") {
          dispatch(
            setMessageInfo({ reset: false, message: "Usuario no autorizado" })
          );
        }
      });
  };
};

export const contactForCommentAndTask = (id) => {
  return function (dispatch) {
    return dispatch(setDetailContactForCommAndTask(id));
  };
};
