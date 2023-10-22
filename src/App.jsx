import "./App.css";
import Hero from "./components/Hero.jsx";
import Blocks from "./components/Blocks";
import Customers from "./components/Customers";
import Plan from "./components/Plan";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Blocks />
      <Customers />
      <Plan />
      <Footer />
    </>
  );
}

export default App;
