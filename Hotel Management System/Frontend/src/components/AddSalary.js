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
 
const AddSalary = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    emp_id: "",
    years: "",
    months: "",
    loans: "",
    OT: "",
    EPF: "",
    basic_salary: "",
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
      .post("http://localhost:5000/salarys", {
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
    console.log(inputs, checked);
    sendRequest().then(() => history("/salarys"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={500}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Emp_id</FormLabel>
        <TextField
          value={inputs.emp_id}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="emp_id"
        />
        <FormLabel>Years</FormLabel>
        <TextField
          value={inputs.years}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="years"
        />
        <FormLabel>Months</FormLabel>
        <TextField
          value={inputs.months}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="months"
        />
        <FormLabel>Loans</FormLabel>
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
         <FormLabel>Basic_salary</FormLabel>
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
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />

        <Button variant="contained" type="submit">
          Add Salary
        </Button>
      </Box>
    </form>
  );
};

export default AddSalary;
