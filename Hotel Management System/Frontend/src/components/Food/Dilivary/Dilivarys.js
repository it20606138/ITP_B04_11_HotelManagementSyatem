import React, { useEffect, useState } from "react";
import "./Dilivary.css";
import axios from "axios";
import Dilivary from "./Dilivary";
const URL = "http://localhost:5000/dilivarys";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Dilivarys = () => {
  const [dilivarys, setDilivarys] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setDilivarys(data.dilivarys));
  }, []);
  console.log(dilivarys);
  return (
    <div>
      <ul>
        {dilivarys &&
          dilivarys.map((dilivary, i) => (
            <li key={i}>
              <Dilivary dilivary={dilivary} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dilivarys;