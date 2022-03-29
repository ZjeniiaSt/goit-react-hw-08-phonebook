import { useSelector, useDispatch } from "react-redux";
import { getvisibleContacts } from "../../redux/contacts/phonebook-selectors";
import { fetchContacts } from "../../redux/contacts/phonebook-operations";
import { useEffect } from "react";
import { Box, List } from "@mui/material";

//import { ContactsRoster } from "./ContactList.styled";
import ContactItem from "../ContactItem";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getvisibleContacts);
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Box paddingLeft={5} paddingRight={5}>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </List>
    </Box>
  );
}

export default ContactList;
