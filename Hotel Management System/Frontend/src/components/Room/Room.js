import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Room.css";
const Room = (props) => {
  const history = useNavigate();
  const { _id, name, rating, description, price, image } = props.room;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/rooms/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/rooms"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      
      <img src={rating} alt={name} style={{ height : "17%" }} />
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>{price}$</h3>
      <Button LinkComponent={Link} to={`/rooms/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Room;
