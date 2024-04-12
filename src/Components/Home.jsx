import React, { useEffect, useState } from "react";
import logo from "../Assets/Images/logoBlack.png";
import imageOne from "../Assets/Images/home1.png";
import imageTwo from "../Assets/Images/home2.png";
import imageThree from "../Assets/Images/home3.png";
import imageFour from "../Assets/Images/home4.png";
import imageFive from "../Assets/Images/home5.png";
import imageSix from "../Assets/Images/home6.png";
import imageSeven from "../Assets/Images/home7.png";
import imageEight from "../Assets/Images/home8.png";
import "../App.css"; // Import your CSS file with the styles

const Home = () => {
  const [isMoved, setIsMoved] = useState(false);

  useEffect(() => {
    const animateInterval = setInterval(() => {
      setIsMoved((prevState) => !prevState); // Toggle animation every 2 seconds
    }, 2000); // Repeat every 2 seconds

    // Clear interval when component unmounts
    return () => clearInterval(animateInterval);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "rgba(255, 244, 223, 1)" }}>
        <div className="p-20">
          <img src={logo} alt="logo" />
          <div className="text-6xl font-semibold my-28 ml-36">
            <p className="flex py-5">
              <span className="tracking-widest">WE</span>
              <span className="mx-4">
                <img
                  className={`org ${isMoved ? "move-right" : ""}`}
                  src={imageOne}
                  alt="imgOne"
                />
              </span>
              <span className="tracking-widest">ORGANIZE THE</span>
            </p>
            <p className="flex py-5">
              <span className="tracking-widest">CONNECTION</span>
              <span className="mx-4">
                <img
                  className={`org ${isMoved ? "two" : ""}`}
                  src={imageTwo}
                  alt="imgTwo"
                />
              </span>
            </p>
            <p className="flex py-5">
              <span className="mx-4">
                <img
                  className={`org ${isMoved ? "three" : ""}`}
                  src={imageThree}
                  alt="imgThree"
                />
              </span>
              <span className="mx-4 flex">
                <span className="tracking-widest">BETWEEN</span>
                <span className="mx-4">
                  <img src={imageFour} alt="imgFour" />
                </span>
                <span className="tracking-widest">MUSIC</span>
              </span>
            </p>
            <p className="flex py-5">
              <span className="tracking-widest">ARTIST</span>
              <span className="mx-4">
                <img src={imageFive} alt="imgFive" />
              </span>
              <span className="tracking-widest">CULTURE</span>
              <img
                className={`org mx-4 ${isMoved ? "four" : ""}`}
                src={imageSix}
                alt="imgSix"
              />
            </p>
            <p className="flex py-5">
              <span className="mr-4">
                <img
                  className={`org mx-4 ${isMoved ? "five" : ""}`}
                  src={imageSeven}
                  alt="imgSeven"
                />
              </span>
              <span className="tracking-widest">ART</span>
              <span className="mx-4">
                <img src={imageEight} alt="imgEight" />
              </span>
              <span className="tracking-widest">& COLLECTIONS</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
