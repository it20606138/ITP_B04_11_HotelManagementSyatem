import React, { useEffect, useState } from "react";
import "./Room.css";
import axios from "axios";
import Cusroom from "./Cusroom";

const URL = "http://localhost:5000/rooms";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Cusrooms = () => {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setRooms(data.rooms));
  }, []);
  console.log(rooms);
  return (
    <div className="screen p-3" style={{ backgroundColor : 'ghostwhite' }}>
    <div>

    


      <ul>
        {rooms &&
          rooms.map((room, i) => (
            <li key={i}>
              <Cusroom room={room} />
            </li>
          ))}
      </ul>
    </div>
    </div>
  );
};

export default Cusrooms;
