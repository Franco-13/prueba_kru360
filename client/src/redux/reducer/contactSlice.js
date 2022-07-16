import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    list: [],
    filterList: null,
    messageInfo: "",
    detailContact: null,
    contactOrigin: null,
    contactTypes: null,
    loading: true,
    detailContactForCommAndTask: null,
  },
  reducers: {
    setContactsList: (state, action) => {
      state.list = action.payload;
    },
    setMessageInfo: (state, action) => {
      if (action.payload.reset) {
        state.messageInfo = "";
      } else {
        state.messageInfo = action.payload.message;
      }
    },
    setDetailContact: (state, action) => {
      state.detailContact = state.list.find(
        (contact) => contact._id === action.payload
      );
    },
    setDetailContactForCommAndTask: (state, action) => {
      state.detailContactForCommAndTask = state.list.find(
        (contact) => contact._id === action.payload
      );
    },
    resetDetailContact: (state) => {
      state.detailContact = null;
      state.detailContactForCommAndTask = null;
    },
    search: (state, action) => {
      const result = [...state.list].filter(
        (contact) =>
          contact.contact_name
            .toString()
            .toLowerCase()
            .includes(action.payload.toString()) ||
          contact.contact_lastName
            .toString()
            .toLowerCase()
            .includes(action.payload.toString())
      );
      state.filterList = result.length ? result : null;
    },
    resetSearchContact: (state) => {
      state.filterList = null;
    },
    setTypeAndOriginContact: (state, action) => {
      state.contactOrigin = action.payload.contactOrigin;
      state.contactTypes = action.payload.contactTypes;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default contactSlice.reducer;

export const {
  setContactsList,
  setMessageInfo,
  setDetailContact,
  resetDetailContact,
  search,
  resetSearchContact,
  setTypeAndOriginContact,
  setLoading,
  setDetailContactForCommAndTask,
} = contactSlice.actions;
