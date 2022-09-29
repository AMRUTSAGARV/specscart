import React from "react";
import "./Home.css";
import lens from "../../images/Group6248.png";
import pen from "../../images/Image35.png";
import specs from "../../images/Image39.png";
import image_two from "../../images/7.jpg";

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

      <div className="content2_parent">
        <div className="content2">
          4 frames, 3 lenses, 7 days - direct to your home.
        </div>
        <div className="content2_text">
          We get it - sometimes you need to hold the glasses in your hand (or
          take a selfie wearing them) to know if they're made for you or not.
          With our Free Home Trial, get 4 frames of your choice at your home,
          along with 3 cool lenses.
        </div>
        <div className="second_content">
          <div className="anti">Anti Reflective Glasses</div>
          <a href="#" className="ctn2">
            Shop Men
          </a>
          <a href="#" className="ctn2">
            Shop Women
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
