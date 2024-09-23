import React from "react";
import MultiplePizzas from "../assets/piza_abt.jpeg";
import "../styles/About.css";
import AboutIcon from "../assets/aboutus.png";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={AboutIcon} alt="about icon" style={{ width: '65px', height: '65px' }} />
  <h1 className="menuTitle">About Us</h1>
</div>
        <p>
        At Fusion Bites, we're not just making pizzas—we're crafting culinary adventures. Each slice we serve is a blend of tradition, innovation, 
        and a dash of fun. From the accidental genius of our Vegetarian Pizza to the fiery passion of our Buffalo Chicken creation, 
        every pizza has a story, a twist, and a taste that will leave you craving more. We believe in pushing the boundaries of flavor, fusing 
        cultures, and delivering an experience that’s as exciting as it is delicious. 
        Whether you're indulging in the cheesy goodness of our classics or daring to try our unique fusion recipes, every bite at Fusion Bites 
        is a celebration of creativity, passion, and pure pizza joy. Welcome to the place where every pizza has a personality—your taste buds are in 
        for a treat!
        </p>
      </div>
    </div>
  );
}

export default About;
