import React, { useEffect, useState } from "react";
import "./Room.css";
import axios from "axios";
import Room from "./Room";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
const URL = "http://localhost:5000/rooms";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Rooms = () => {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setRooms(data.rooms));
  }, []);
  console.log(rooms);
  return (
    <div className="screen p-3" style={{ backgroundColor : 'ghostwhite' }}>
    <div>

    <Box display="flex" flexDirection="column" alignItems="center">

<Button
  LinkComponent={Link}
  to="/addrr"
  sx={{ marginTop: 5, background: "orangered" }}
  variant="contained"
>
  <Typography variant="h3">Add Room</Typography>
</Button>
</Box>


      <ul>
        {rooms &&
          rooms.map((room, i) => (
            <li key={i}>
              <Room room={room} />
            </li>
          ))}
      </ul>
    </div>
    </div>
  );
};

export default Rooms;
