import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Icons from "./components/Icons";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Proceed from "./Pages/Proceed";
import Gosomewhere from "./Pages/Gosomewhere";
import Products from "./components/Products";
import CommentBox from "./components/CommentBox";
import FeedbackBox from "./components/FeedbackBox";
// import cartDetail from "./cartDetail.json";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/go-somewhere" element={<Gosomewhere />} />
        <Route path="/mycart" element={<Cart />} />
        <Route path="/unproceed" element={<Proceed />} />
        <Route path="/cart" element={<Products />} />
        <Route path="/commentbox" element={<CommentBox />} />
        <Route path="/feedbackbox" element={<FeedbackBox />} />
      </Routes>

      {/* <Figures /> */}
      <Footer />
    </>
  );
}

export default App;
