function BookingBar() {
  return (
    <div style={container}>

      <input type="date" />

      <input type="date" />

      <select>
        <option>1 Guest</option>
        <option>2 Guests</option>
        <option>3 Guests</option>
      </select>

      <button style={button}>Check Availability</button>

    </div>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  padding: "30px",
  background: "#F8F6F2"
};

const button = {
  background: "#C6A75E",
  border: "none",
  padding: "10px 20px",
  color: "white",
  cursor: "pointer"
};

export default BookingBar;