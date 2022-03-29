import { useDispatch } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contacts/phonebook-operations";
import PropTypes from "prop-types";
import { Button, ListItem, ListItemText } from "@mui/material";

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <ListItemText>
        {name}: {number}
      </ListItemText>
      <Button
        type="button"
        aria-label="delete"
        variant="contained"
        onClick={() => dispatch(deleteContact(id))}
      >
        <BsTrashFill />
      </Button>
    </ListItem>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
