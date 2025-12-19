import Section1 from "../components/sections/landing/Section1";
import Footer from "../components/sections/landing/Footer";

const Home = ({ addToCart }) => {
  return (
    <>
      <Section1 addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Home;
