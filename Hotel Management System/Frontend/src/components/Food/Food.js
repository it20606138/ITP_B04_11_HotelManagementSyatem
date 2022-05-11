import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Food.css";
const Food = (props) => {
  const history = useNavigate();
  const { _id, name, description, price, image } = props.food;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/foods/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/foods"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
    
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/foods/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Food;
