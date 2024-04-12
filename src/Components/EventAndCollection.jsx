import React, { useEffect, useState } from "react";
import textImg from "../Assets/Images/Content/Text.png";
import locaTIOnIcon from "../Assets/Images/Content/locationIcon.png";
import timeIcon from "../Assets/Images/Content/timeIcon.png";
import artist1 from "../Assets/Images/Content/artist1.png";
import artist2 from "../Assets/Images/Content/artist2.png";
import artist3 from "../Assets/Images/Content/artist3.png";
import qrCode from "../Assets/Images/Content/qrCode.png";
import joinNow from "../Assets/Images/Content/joinNow.png";
import yellowLogo from "../Assets/Images/Content/yellowLogo.png";
import yelloLogoText from "../Assets/Images/Content/yelloLogoText.png";
import eventBtn from "../Assets/Images/Content/eventBtn.png";
import contentBtn from "../Assets/Images/Content/contentBtn.png";
import frame from "../Assets/Images/Content/frame.png";
import card from "../Assets/Images/Content/card.png";
import eventCard1 from "../Assets/Images/Content/eventCard1.png";
import eventCard2 from "../Assets/Images/Content/eventCard2.png";
import eventCard3 from "../Assets/Images/Content/eventCard3.png";
import eventCard4 from "../Assets/Images/Content/eventCard4.png";
import collectCard1 from "../Assets/Images/Content/collectCard1.png";
import collectCard3 from "../Assets/Images/Content/collectCard3.png";

const EventAndCollection = () => {
  const [isEvent, setIsEvent] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);

  const toggleEventOrCollection = () => {
    setIsEvent(!isEvent);
    setSlideIndex(0); // Reset slide index when toggling
  };

  const nextSlide = () => {
    const totalSlides = isEvent ? 4 : 4; // Update totalSlides based on event or collectible cards count
    setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  useEffect(() => {
    const animateInterval = setInterval(() => {
      nextSlide();
    }, 2000); // Repeat every 2 seconds
    // Clear interval when component unmounts
    return () => clearInterval(animateInterval);
  }, []);

  return (
    <>
      <div className="bg-black" style={{ color: "white" }}>
        <div
          style={{ backgroundColor: "rgb(21,24,27)" }}
          className="mx-16 grid grid-cols-12 gap-4"
        >
          <div className="col-span-7 px-7">
            <div className="flex items-center justify-start">
              <div>
                <img src={yellowLogo} alt="logo" />
              </div>
              <div>
                <img src={yelloLogoText} alt="logoText" />
              </div>
            </div>

            <div>
              <div className="relative">
                <div
                  id="1"
                  className="w-80 text-9xl font-bold mt-12 mx-5 absolute top-0 left-0 z-10"
                  style={{ color: "rgba(255, 255, 255, 0.2)" }}
                >
                  <p>
                    ASTR
                    <br />
                    IX
                  </p>
                  <br />
                  <p>
                    EVE
                    <br />
                    NTS
                  </p>
                </div>
                <div
                  id="2"
                  className="slider-container flex relative z-20"
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="slides-div mx-10 my-36"
                    style={{
                      transform: `translateX(${-slideIndex * 45}%)`, // Adjust to translate based on slideIndex
                      transition: "transform 0.5s ease",
                      display: "flex",
                    }}
                  >
                    {isEvent ? (
                      <>
                        <img src={eventCard1} alt="Event 1" className="img" />
                        <img src={eventCard2} alt="Event 2" className="img" />
                        <img src={eventCard3} alt="Event 3" className="img" />
                        <img src={eventCard4} alt="Event 4" className="img" />
                      </>
                    ) : (
                      <>
                        <img
                          src={collectCard1}
                          alt="Collectible 1"
                          className="img"
                        />
                        <img
                          src={eventCard2}
                          alt="Collectible 2"
                          className="img"
                        />
                        <img
                          src={collectCard3}
                          alt="Collectible 3"
                          className="img"
                        />
                        <img
                          src={eventCard4}
                          alt="Collectible 2"
                          className="img"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20" style={{ cursor: "pointer" }}>
              {isEvent ? (
                <img
                  src={eventBtn}
                  alt="Event Button"
                  onClick={toggleEventOrCollection}
                />
              ) : (
                <img
                  src={contentBtn}
                  alt="Content Button"
                  onClick={toggleEventOrCollection}
                />
              )}
            </div>
          </div>

          <div
            style={{ backgroundColor: "rgb(185,160,255)", height: "1024px" }}
            className="col-span-1 flex items-center justify-center"
          >
            <img src={textImg} />
          </div>

          <div className="col-span-4 p-7">
            {isEvent ? (
              <div>
                <p className="w-72 h-16 font-bold text-3xl">
                  Explore Your First Event
                </p>
                <h2 className="w-96 h-20 font-bold text-6xl mt-20">
                  Event Name
                </h2>
                <p className="flex items-center justify-center w-96 h-7 font-semibold text-2xl mb-7 mt-3">
                  <span>
                    <img
                      src={locaTIOnIcon}
                      className="mr-3"
                      alt="Location Icon"
                    />
                  </span>{" "}
                  <span className="mr-5">Venue</span>
                  <span>
                    <img src={timeIcon} className="mr-3" alt="Time Icon" />
                  </span>
                  <span>04/3/2024 @19:00</span>
                </p>
                <p className="w-80 h-28 font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  quod, corrupti minus tempore, dignissimos odio, ipsa quas
                  asperiores perferendis excepturi?
                </p>
                <p className=" w-96 h-10 font-semibold text-3xl my-7">
                  Artist Lineup
                </p>
                <div className="flex items-center">
                  <div className="col-span-4">
                    <img
                      style={{ height: "125px" }}
                      src={artist1}
                      alt="Artist 1"
                    />
                  </div>
                  <div className="col-span-4">
                    <img
                      style={{ height: "165px" }}
                      src={artist2}
                      alt="Artist 2"
                    />
                  </div>
                  <div className="col-span-4">
                    <img
                      style={{ height: "125px" }}
                      src={artist3}
                      alt="Artist 3"
                    />
                  </div>
                </div>
                <div className="flex items-end justify-between mt-40">
                  <div>
                    <img src={qrCode} alt="QR Code" className=" mt-2" />
                  </div>
                  <div>
                    <img src={joinNow} alt="Join Now" className=" mt-2" />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p className="w-72 h-16 font-bold text-3xl">
                  Explore Your First Collectible
                </p>
                <h2 className="font-bold text-6xl mt-20 my-10">
                  Meta <br /> Lives
                </h2>
                <p className="w-96 h-7 font-semibold text-2xl mb-7 mt-3">
                  Live in Astix
                </p>
                <p className="w-80 h-28 font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  quod, corrupti minus tempore, dignissimos odio, ipsa quas
                  asperiores perferendis excepturi?
                </p>
                <p className="flex items-center justify-around font-semibold text-xl my-7">
                  <span>
                    <img src={frame} alt="Frame Icon" />
                  </span>
                  <span>22k people interested</span>
                </p>
                <p>Collectibles</p>
                <div className="flex">
                  <div className="w-96">
                    <img src={card} alt="Card" />
                  </div>
                  <div className="w-96">
                    <img src={card} alt="Card" />
                  </div>
                  <div className="w-96">
                    <img src={card} alt="Card" />
                  </div>
                </div>
                <div className="flex justify-end mt-28">
                  <div>
                    <img src={joinNow} alt="Join Now" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventAndCollection;
