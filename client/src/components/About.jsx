import hotelImg from "../assets/hotel1.jpg";

function About() {
  return (
    <section className="about">

      <img src={hotelImg} alt="Hotel" />

      <div>
        <h2>About Our Hotel</h2>

        <p>
          Luxury Hotel offers modern rooms, beautiful views,
          and premium facilities for unforgettable experiences.
        </p>

        <button>Explore More</button>
      </div>

    </section>
  );
}

export default About;