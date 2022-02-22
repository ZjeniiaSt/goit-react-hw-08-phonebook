import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContact = async ({ name, number }) => {
  const contact = { name, number };
  const { data } = await axios.post("/contacts", contact);
  return data;
};

export const deleteContact = async (contactId) => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

export const registerUser = async (credentials) => {
  const { data } = await axios.post("/users/signup", credentials);
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await axios.post("/users/login", credentials);
  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.post("users/logout");
  return data;
};

export const CurrentUser = async (persistedToken) => {
  const { data } = await axios.get("/users/current", persistedToken);
  return data;
};
