import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AddDilivary = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      email: "",
      address: "",
      
  
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
        .post("http://localhost:5000/dilivarys", {
          name: String(inputs.name),
          
          email: String(inputs.email),
          address: String(inputs.address),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
// <<<<<<< HEAD
      sendRequest().then(() => history("/success"));
// =======
      sendRequest().then(() => history("/dilivarys"));
// >>>>>>> 2e6f8ecc60467b25114fa308c6c58b727076932f
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
          <FormLabel>Address</FormLabel>
          <TextField
            value={inputs.address}
            onChange={handleChange}
            
            margin="normal"
            fullWidth
            variant="outlined"
            name="address"
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
            Add Dilivary
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddDilivary;