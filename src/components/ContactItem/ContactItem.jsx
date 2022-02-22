import { useDispatch } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contacts/phonebook-operations";
import {
  ContactsData,
  ContactNumber,
  ContactDelete,
} from "./ContactItem.styled";
import PropTypes from "prop-types";

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <ContactsData>
      <span>
        {name}: <ContactNumber>{number}</ContactNumber>
      </span>
      <ContactDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        <BsTrashFill />
      </ContactDelete>
    </ContactsData>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
