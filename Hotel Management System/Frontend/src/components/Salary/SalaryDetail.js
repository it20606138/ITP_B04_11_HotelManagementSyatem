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

const SalaryDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/salarys/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.salary));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/salarys/${id}`, {
        emp_id: String(inputs.emp_id),
        years: String(inputs.years),
        months: String(inputs.months),
        loans: String(inputs.loans),
        OT: String(inputs.OT),
        EPF: String(inputs.EPF),
        basic_salary: String(inputs.basic_salary),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/salarys"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (
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
            <FormLabel>emp_id</FormLabel>
            <TextField
              value={inputs.emp_id}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="emp_id"
            />
            <FormLabel>years</FormLabel>
            <TextField
              value={inputs.years}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="years"
            />
            <FormLabel>months</FormLabel>
            <TextField
              value={inputs.months}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="months"
            />
            <FormLabel>loans</FormLabel>
            <TextField
              value={inputs.loans}
              onChange={handleChange}
               
              margin="normal"
              fullWidth
              variant="outlined"
              name="loans"
            />
            <FormLabel>OT</FormLabel>
            <TextField
              value={inputs.OT}
              onChange={handleChange}
              
              margin="normal"
              fullWidth
              variant="outlined"
              name="OT"
            />
            <FormLabel>EPF</FormLabel>
            <TextField
              value={inputs.EPF}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="EPF"
            />

            <FormLabel>basic_salary</FormLabel>
            <TextField
              value={inputs.basic_salary}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="basic_salary"
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
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            />

            <Button variant="contained" type="submit">
              Update salary
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default SalaryDetail;
      