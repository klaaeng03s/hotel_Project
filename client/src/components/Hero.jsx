function Hero() {
  return (
    <section style={heroStyle}>
      <div>
        <h1>Luxury Hotel Experience</h1>
        <p>Enjoy the best comfort and luxury stay</p>

        <button style={btn}>Book Your Stay</button>
      </div>
    </section>
  );
}

const heroStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage:
    "url(https://images.unsplash.com/photo-1566073771259-6a8506099945)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center"
};

const btn = {
  marginTop: "20px",
  padding: "12px 25px",
  background: "#C6A75E",
  border: "none",
  color: "white",
  fontSize: "16px",
  cursor: "pointer"
};

export default Hero;