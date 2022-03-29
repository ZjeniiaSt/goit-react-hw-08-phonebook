import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/phonebook-selectors";
import { changeFilter } from "../../redux/contacts/phonebook-actions";
import { BsSearch } from "react-icons/bs";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
//import { FilterInput, FilterLabel } from "./Filter.styled";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Box padding={5}>
      <TextField
        variant="standard"
        fullWidth
        label="Find contacts by name"
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></TextField>
    </Box>
  );
}

export default Filter;
