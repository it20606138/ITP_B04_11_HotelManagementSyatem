import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Customer.css";
const Customer = (props) => {
  const history = useNavigate();
  const { _id, name, email, mobile, checkin, checkout, image } = props.customer;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/customers/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/customers"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{mobile}</h3>
      <h3>{checkin}</h3>
      <h3>{checkout}</h3>
      <Button LinkComponent={Link} to={`/customers/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Customer;
