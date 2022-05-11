import React, { useEffect, useState } from "react";
import "./Customer.css";
import axios from "axios";
import Customer from "./Customer";
const URL = "http://localhost:5000/customers";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Customers = () => {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setCustomers(data.customers));
  }, []);
  console.log(customers);
  return (
    <div>



      <ul>
        {customers &&
          customers.map((customer, i) => (
            <li key={i}>
              <Customer customer={customer} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Customers;
