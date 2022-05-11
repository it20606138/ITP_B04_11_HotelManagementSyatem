import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    checkin: "",
    checkout: "",

    image: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/customers", {
        name: String(inputs.name),
        email: String(inputs.email),
        mobile: String(inputs.mobile),
        checkin: String(inputs.checkin),
        checkout: String(inputs.checkout),

        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/success"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Email</FormLabel>
        <TextField
          value={inputs.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="email"
        />
        <FormLabel>Mobile</FormLabel>
        <TextField
          value={inputs.mobile}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="mobile"
        />
        <FormLabel>Checkin</FormLabel>
        <TextField
          value={inputs.checkin}
          onChange={handleChange}
          type="date"
          margin="normal"
          fullWidth
          variant="outlined"
          name="checkin"
        />
        <FormLabel>Checkout</FormLabel>
        <TextField
          value={inputs.checkout}
          onChange={handleChange}
          type="date"
          margin="normal"
          fullWidth
          variant="outlined"
          name="checkout"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />

        <Button variant="contained" type="submit">
          Add Customer
        </Button>
      </Box>
    </form>
  );
};

export default AddCustomer;
