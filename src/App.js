import "./App.css";
import "./styles/Home.css";

// img
import logo from "./assets/logo.png";
import back1 from "./assets/back1.png";
import img2 from "./assets/img2.png";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Section2 />
    </div>
  );
}

const Home = () => {
  return (
    <div className="section home px-80 box-sizing">
      <div className="w-full relative h-full border-radius-5 bg-grey box-sizing flex justify-space-between  px-80 ">
        <div className="home-left flex-column justify-center">
          <div className="small-hr bg-orange border-radius-5 my-10"></div>
          <p className="sec-text w-1-2 bold">
            Company Name Is Now Open And Only For It Cause.
          </p>
          <p className="w-1-2 my-20">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>

          <div className="action-button bg-orange">
            <p className="btn">Discover Now</p>
          </div>
        </div>

        <div className="home-right relative">
          <div className="back-circle relative">
            <img src={back1} alt="back" className="back-img" />
            <div className="card-bubble"></div>

            <div className="card-bubble card-bubble2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="section section2 w-full h-full flex justify-space-between px-80 box-sizing">
      <div className="flex relative align-items-center justify-center section2-left  h-full  border-radius-5 bg-grey">
        <img alt=" " src={img2} />
        <img alt="" src={logo} className="absolute top0 back"/>
      </div>
      <div className="flex section2-right flex-column justify-center">
        <p className="sec-text bold ">
          Company Name Is Now Open And Only For It Cause.
        </p>
        <p className="">
          Company Name Is Now Open And Only For It Cause.Company Name Is Now
          Open And Only For It Cause, Company Name Is Now Open And Only For It
          Cause, Company Name Is Now Open And Only For It Cause.
        </p>
        <div className="my-20">
          <p className="bold">Company Policy</p>
          <p className="">
            Company Name Is Now Open And Only For It Cause.Company Name Is Now
            Open And Only For It Cause, Company Name Is Now Open And Only For It
            Cause, Company Name Is Now Open And Only For It Cause.
          </p>
        </div>

        <div className="">
          <p className="bold">Company Policy</p>
          <p className="">
            Company Name Is Now Open And Only For It Cause.Company Name Is Now
            Open And Only For It Cause, Company Name Is Now Open And Only For It
            Cause, Company Name Is Now Open And Only For It Cause.
          </p>
        </div>

        <div className="action-button bg-orange my-20">
          <p className="btn">Discover Now</p>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <motion.div className="header max-z">
      <div className="logo flex align-items-end ">
        <p className="logo-text ">
          SPORT GATE <span className="orange">.</span>
        </p>
      </div>

      <div className="navs flex">
        <p className="nav-item mx-20 orange small-text pointer">Home</p>
        <p className="nav-item mx-20 grey small-text pointer">Company</p>
        <p className="nav-item mx-20 grey small-text pointer">About</p>
        <p className="nav-item mx-20 grey small-text pointer">Contact</p>
      </div>

      <div className="action-button bg-orange">
        <p className="btn">Contact Us</p>
      </div>
    </motion.div>
  );
};

export default App;
