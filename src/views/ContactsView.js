import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import Load from "../components/Loader/Loader";
import { getLoading } from "../redux/contacts/phonebook-selectors";

function ContactsView() {
  return (
    <>
      <ContactForm />
      <Filter />
      {getLoading && <Load />}
      <ContactList></ContactList>
    </>
  );
}

export default ContactsView;
