import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookingBar from "../components/BookingBar";
import About from "../components/About";
// import RoomsSection from "../components/RoomsSection";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <RoomsSection/> */}
      <BookingBar/>
      <About/>
      <Facilities/>
      <Footer/>
    </div>
  );
}

export default Home;