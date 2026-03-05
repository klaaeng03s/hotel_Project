function NavBar() {
  return (
    <nav style={navStyle}>
      <h2>LuxuryHotel</h2>

      <div>
        <a href="#">Home</a>
        <a href="#">Rooms</a>
        <a href="#">Contact</a>
      </div>
      <button style={btn}>Book Now</button>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  background: "#111",
  color: "white"
};

const btn = {
  background: "#C6A75E",
  border: "none",
  padding: "10px 20px",
  color: "white",
  cursor: "pointer",
};

export default NavBar;