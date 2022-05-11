import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Dilivary.css";
const Dilivary = (props) => {
  const history = useNavigate();
  const { _id, name, email,address, image } = props.dilivary;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/dilivarys/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/dilivarys"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{address}</h3>
      
      <Button LinkComponent={Link} to={`/dilivarys/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Dilivary;
