import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api.js";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/contacts");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsApi = createAsyncThunk(
  "contacts/add",
  async ({ name, number }, thunkAPI) => {
    try {
      const res = await api.post("/contacts", { name, number });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delContactsApi = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      const res = await api.delete(`/contacts/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const restoreContactsApi = createAsyncThunk(
  "contacts/restoreContacts",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, {
        name: contact.name,
        number: contact.number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);