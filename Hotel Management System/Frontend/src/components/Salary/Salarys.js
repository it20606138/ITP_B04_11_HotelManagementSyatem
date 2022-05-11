import React, { useEffect, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Salary";
import axios from "axios";
import Salary from "./Salary";
const URL = "http://localhost:5000/salarys";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Salarys = () => {
  const [salarys, setSalarys] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setSalarys(data.salarys));
  }, []);
  console.log(Salarys);
  return (
    <div>

<Box display="flex" flexDirection="column" alignItems="center">

  <Button
    LinkComponent={Link}
    to="/add"
    sx={{ marginTop: 5, background: "orangered" }}
    variant="contained"
  >
    <Typography variant="h3">Add Salary</Typography>
  </Button>
  <Button
    LinkComponent={Link}
    to="/calculate"
    sx={{ marginTop: 5, background: "orangered" }}
    variant="contained"
  >
    <Typography variant="h3">Calculations</Typography>

  </Button>

  <Button
    LinkComponent={Link}
    to="/allcalculate"
    sx={{ marginTop: 5, background: "orangered" }}
    variant="contained"
  >
    <Typography variant="h3">Calculation Details</Typography>
  </Button>
</Box>


      <ul>
        {salarys &&
          salarys.map((salary, i) => (
            <li key={i}>
              <Salary salary={salary} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Salarys;
