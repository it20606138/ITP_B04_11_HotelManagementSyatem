import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Room.css";

const RoomDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/rooms/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.room));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/rooms/${id}`, {
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
    sendRequest().then(() => history("/rooms"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="screen p-3" style={{ backgroundColor : 'ghostwhite' }}>
      
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
        <label className="avenirnext-demi-normal-gravel-18px" id="adminAddNewRoom">Admin Page</label>
      <div className="screen p-3">
        <label className="avenirnext-demi-normal-gravel-15px" id="adminAddNewRoom">Update Room</label>
      </div>
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
            <div className="screen p-3" style={{ backgroundColor : '#AEAFB1' }}>
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
            />
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            />

            <Button variant="contained" type="submit">
              Update Room
            </Button>
            </fieldset>
            </div>
          </Box>
        </form>
      )}
    </div>
    </div>
  );
};

export default RoomDetail;
