import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../serviсes/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.fetchContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await API.addContact(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.deleteContact(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
