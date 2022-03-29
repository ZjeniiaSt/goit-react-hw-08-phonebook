import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Alert,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/phonebook-operations";
import { getContacts } from "../../redux/contacts/phonebook-selectors";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    )
      ? alert(`${name} is alredy in contacts`)
      : dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Box padding={5}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="column" alignItems="stretch">
              <Grid item>
                <TextField
                  fullWidth
                  variant="standard"
                  label="Name"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                variant="standard"
                label="Number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Grid>

            <Grid xs={10} item marginY={3}>
              <Button type="submit" variant="contained">
                Add contact
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactForm;
