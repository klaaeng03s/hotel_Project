import { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "./RoomCard";

function RoomsSection() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/rooms")
      .then(res => setRooms(res.data));
  }, []);

  return (
    <section style={{ padding: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Our Rooms</h2>

      <div style={grid}>
        {rooms.map(room => (
          <RoomCard key={room.id} room={room}/>
        ))}
      </div>
    </section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "30px",
  marginTop: "30px"
};

export default RoomsSection;