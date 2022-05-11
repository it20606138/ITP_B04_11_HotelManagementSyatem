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

import 'bootstrap/dist/css/bootstrap.min.css';

const AddRoom = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",

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
      .post("http://localhost:5000/rooms", {
        name: String(inputs.name),
        rating: String(inputs.rating),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/rooms"));
  };

  return (
    <div className="screen p-3" style={{ backgroundColor : 'ghostwhite' }}>

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
      
        <label className="avenirnext-demi-normal-gravel-18px" id="adminAddNewRoom">Admin Page</label>
      <div className="screen p-3">
        <label className="avenirnext-demi-normal-gravel-15px" id="adminAddNewRoom">Add New Room</label>
      </div>
        <fieldset className="field-group border p-3 mt-3">
        <FormLabel>Name</FormLabel>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3 mb-3">
        <input
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          className="help-input form-control" 
          placeholder="Please Enter Room Name"
        />
        </div>
        <FormLabel>Rating</FormLabel>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3 mb-3">
        <input
          value={inputs.rating}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="rating"
          className="help-input form-control" 
          placeholder="Please Enter Rating Image URL"
        />
        </div>
        <FormLabel>Description</FormLabel>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3 mb-3">
        <input
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          className="help-input form-control" 
          placeholder="Please Enter Discription"
        />
        </div>
        <FormLabel>Price</FormLabel>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3 mb-3">
        <input
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          className="help-input form-control" 
          placeholder="Please Enter Price"
        />
        </div>
        <FormLabel>Image</FormLabel>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3 mb-3">
        <input
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          className="help-input form-control" 
          placeholder="Please Enter Image URL"
        />
        </div>
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />

        <Button variant="contained" type="submit">
          Add Room
        </Button>
        </fieldset>
      </Box>
    </form>
    </div>
  );
};

export default AddRoom;
