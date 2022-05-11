import React, { useEffect, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Food.css";
import axios from "axios";
import Food from "./Food";
const URL = "http://localhost:5000/foods";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Foods = () => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setFoods(data.foods));
  }, []);
  console.log(foods);
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">

        <Button
          LinkComponent={Link}
          to="/addf"
          sx={{ marginTop: 5, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Add Food</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/foodr"
          sx={{ marginTop: 5, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Generate Report</Typography>
        </Button>

      </Box>

      
      <ul>
        {foods &&
          foods.map((food, i) => (
            <li key={i}>
              <Food food={food} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Foods;
