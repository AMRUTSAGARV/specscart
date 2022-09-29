import React from "react";
import "./Home.css";
import lens from "../../images/Group6248.png";
import pen from "../../images/Image35.png";
import specs from "../../images/Image39.png";

const Home = () => {
  return (
    <div>
      <div className="bimg">
        <div className="homi">
          <div className="home1">
            <div className="home_trial">Home Trial Cart 2.0</div>
            <div className="its_an">It's An Experience!</div>
            <div className="its_an">Four Frames. Three Lenses. 1Laser</div>
            <div className="its_an">
              <a href="#" className="ctn">
                Try Now
              </a>
            </div>
          </div>
          <div className="home1">
            {/* <img src={lens} alt="i1" /> */}
            {/* <img src={pen} alt="i2" /> */}
            <img className="specs" src={specs} alt="i3" />
          </div>
        </div>
      </div>

      <div className="aboutme">Page One</div>
      <div className="mydetails">Texts for page One</div>
      <div className="icons">
        <a href="#" className="fa fa-twitter"></a>

        <a href="#" className="fa fa-linkedin"></a>
        <a href="#" className="fa fa-youtube"></a>
      </div>
      <div className="myprojects">Page 2 </div>
      <div className="pdetails">Texts for Page 2</div>
      <div className="also">
        Also have build front end of an Ecommerce App, Imdb App
      </div>
    </div>
  );
};

export default Home;
