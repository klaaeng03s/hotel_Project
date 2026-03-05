import  { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "../components/RoomCard";

function Rooms() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/rooms")
      .then((res) => {
        setRooms(res.data);
      });
  }, []);

  return (
    <div style={containerStyle}>

      <h1 style={{textAlign: "center"}}>
        Our Rooms
      </h1>

      <div style={gridStyle}>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  padding: "50px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
  marginTop: "30px"
};

export default Rooms;
