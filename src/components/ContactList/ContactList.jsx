import { useSelector, useDispatch } from "react-redux";
import { getvisibleContacts } from "../../redux/contacts/phonebook-selectors";
import { fetchContacts } from "../../redux/contacts/phonebook-operations";
import { useEffect } from "react";

import { ContactsRoster } from "./ContactList.styled";
import ContactItem from "../ContactItem";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getvisibleContacts);
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <ContactsRoster>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ContactsRoster>
  );
}

export default ContactList;
