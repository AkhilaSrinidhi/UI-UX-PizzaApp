import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Pizza1 from "../assets/pizza_bg.jpg"; // Background pizza image
import Pizza2 from "../assets/pizza_tpng.jpg"; // Import another pizza image
import ExtraImage1 from "../assets/ei1.jpg"; // Import extra images
import ExtraImage2 from "../assets/ei2.jpg";
import { motion } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; // Import icons

const allImages = [Pizza2, ExtraImage1, ExtraImage2]; // Array to hold all images

function Home() {
  const [currentImage, setCurrentImage] = useState(0); // State for the current image

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home">
      {/* Animated Background Section */}
      <div className="section">
        <motion.div
          className="headerContainer"
          style={{
            backgroundImage: `url(${Pizza1})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1>Pizza Corner</h1>
          <p>Discover a New Slice of Flavor</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </motion.div>
      </div>

      {/* Insider Heading Section */}
      <div className="insider-heading">
        <h2>Join the FusionBites Insider Club: Where Every Bite Tells a Story</h2>
      </div>

      {/* Image Slider Section */}
      <div className="section">
        <div className="extra-images-wrapper">
          <FaChevronLeft
            onClick={handlePrevImage}
            className="extra-image-nav left-nav"
          />
          <img
            src={allImages[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="pizza-image"
          />
          <FaChevronRight
            onClick={handleNextImage}
            className="extra-image-nav right-nav"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
