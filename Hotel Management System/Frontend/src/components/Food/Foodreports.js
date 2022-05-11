import React, { useEffect, useState } from "react";
import "./Food.css";
import axios from "axios";
import Foodreport from "./Foodreport";
const URL = "http://localhost:5000/foods";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Foodreports = () => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setFoods(data.foods));
  }, []);
  console.log(foods);
  return (
    <div>
      <ul>
        {foods &&
          foods.map((food, i) => (
            <li key={i}>
              <Foodreport food={food} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Foodreports;
