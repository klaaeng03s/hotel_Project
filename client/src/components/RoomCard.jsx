function RoomCard({ room }) {
  return (
    <div style={card}>
      <img
        src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
        alt="room"
        style={img}
      />

      <div style={{ padding: "15px" }}>
        <h3>{room.name}</h3>
        <p>${room.price} / night</p>
        <button style={btn}>Book Now</button>
      </div>
    </div>
  );
}

const card = {
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  borderRadius: "10px",
  overflow: "hidden"
};

const img = {
  width: "100%",
  height: "200px",
  objectFit: "cover"
};

const btn = {
  marginTop: "10px",
  background: "#C6A75E",
  border: "none",
  padding: "8px 15px",
  color: "white",
  cursor: "pointer"
};

export default RoomCard;