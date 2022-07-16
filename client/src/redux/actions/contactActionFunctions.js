import {
  resetDetailContact,
  resetSearchContact,
  search,
  setTypeAndOriginContact,
  setContactsList,
  setDetailContact,
  setLoading,
  setMessageInfo,
} from "../reducer/contactSlice";

export const setLoadingStatus = (payload) => {
  return function (dispatch) {
    dispatch(setLoading(payload));
  };
};

export const fetchAllContacts = () => {
  return function (dispatch) {
    dispatch(setLoadingStatus(true));
    return fetch(`${process.env.REACT_APP_API}/contact`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const parseDate = data?.map((c) => {
          const brith = c.contact_brithday.slice(0, 10);
          return { ...c, contact_brithday: brith };
        });
        dispatch(setContactsList(parseDate));
        dispatch(setLoadingStatus(false));
      })
      .catch((error) => {
        dispatch(setLoadingStatus(false));
        console.error(error);
      });
  };
};

export const fetchTypeAndOriginContact = () => {
  return function (dispatch) {
    return fetch(`${process.env.REACT_APP_API}/contact/info`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTypeAndOriginContact(data));
      });
  };
};

export const postContact = (payload, token) => {
  return function (dispatch) {
    dispatch(setLoadingStatus(true));
    return fetch(`${process.env.REACT_APP_API}/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        dispatch(setMessageInfo({ reset: false, message: "Registro creado." }));
        dispatch(fetchAllContacts());
      })
      .catch((error) => {
        console.error(error);
        dispatch(setLoadingStatus(false));

        dispatch(
          setMessageInfo({
            reset: false,
            message: `Ocurrió un error vuelva a intentar más tarde.`,
          })
        );
      });
  };
};

export const putContact = (payload, id, token) => {
  return function (dispatch) {
    return fetch(`${process.env.REACT_APP_API}/contact/${id}`, {
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
          setMessageInfo({ reset: false, message: "Registro actualizado" })
        );
        dispatch(fetchAllContacts());
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
        } else {
          dispatch(
            setMessageInfo({
              reset: false,
              message: "Ocurrió un error vuelva a intentar más tarde.",
            })
          );
        }
      });
  };
};

export const removeContact = ({ id }, token) => {
  return function (dispatch) {
    dispatch(setLoadingStatus(true));
    return fetch(`${process.env.REACT_APP_API}/contact/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message || data.error) {
          throw new Error(data.message || data.error);
        }
        dispatch(
          setMessageInfo({ reset: false, message: "Registro eliminado" })
        );
        dispatch(fetchAllContacts());
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

export const resetMessageInfo = () => {
  return function (dispatch) {
    return dispatch(setMessageInfo({ reset: true }));
  };
};

export const searchContactsByName = (name) => {
  return function (dispatch) {
    return dispatch(search(name));
  };
};

export const resetSearchContactByName = () => {
  return function (dispatch) {
    return dispatch(resetSearchContact());
  };
};

export const detailContact = (id) => {
  return function (dispatch) {
    return dispatch(setDetailContact(id));
  };
};

export const resetContact = () => {
  return function (dispatch) {
    return dispatch(resetDetailContact());
  };
};
