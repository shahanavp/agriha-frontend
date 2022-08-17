import React from "react";
import styles from "../style/architectcarousal.module.css";
import Carousel from "react-elastic-carousel";
import { Hidden } from "@mui/material";

// import { Carousel } from 'react-customizable-carousel'
function Architectcarousal() {
  const selectarchitecture = () => {
    if(document.getElementById("tick").style.display==="none"){
    document.getElementById("tick").style.display = "block";
    }else{
      document.getElementById("tick").style.display="none"
    }
  };
  // const removetick = () => {
   
  //   document.getElementById("tick").style.display = "none";
  // };
  return (
    <Carousel>
      <div className={styles.cardmain}>
        <div className={styles.card} onClick={selectarchitecture}>
          <div className={styles.imagehover}>
            {/* style={{ backgroundImage: "url(" + "assets/Ellipse 32.svg" + ")"}} */}
            <img
              className={styles.image}
              src="assets/Ellipse 32.svg"
              alt="Card image cap"
            />
            <img
              className={styles.imageinline}
              src="assets/hover.svg"
              id="tick"
              // onClick={removetick}
            />
          </div>

          <b className={styles.labelname}>Muhammed yaseen</b>
          <p className={styles.labeldesc}>choose your project type</p>
          <button className={styles.viewbutton}>View more</button>
        </div>

        <div className={styles.card} onClick={selectarchitecture}>
          <div className={styles.imagehover}>
            <img
              src="assets/Ellipse 33.svg"
              className={styles.image}
              alt="Card image cap"
            />
            <img className={styles.imageinline} src="assets/hover.svg" />
          </div>
          <b className={styles.labelname}>Shijin benny</b>
          <p className={styles.labeldesc}>choose your project type</p>
          <button className={styles.viewbutton}>View more</button>
        </div>
        <div className={styles.card} onClick={selectarchitecture}>
          <div className={styles.imagehover}>
            <img
              src="assets/Ellipse 34.svg"
              className={styles.image}
              alt="Card image cap"
            />
            <img className={styles.imageinline} src="assets/hover.svg" />
          </div>
          <b className={styles.labelname}>Jenifer</b>
          <p className={styles.labeldesc}>choose your project type</p>
          <button className={styles.viewbutton}>View more</button>
        </div>
        <div className={styles.card} onClick={selectarchitecture}>
          <div className={styles.imagehover}>
            <img
              src="assets/Ellipse 35.svg"
              className={styles.image}
              alt="Card image cap"
            />
            <img className={styles.imageinline} src="assets/hover.svg" />
          </div>
          <b className={styles.labelname}>Althaf rahman</b>
          <p className={styles.labeldesc}>choose your project type</p>
          <button className={styles.viewbutton}>View more</button>
        </div>
        <div className={styles.card} onClick={selectarchitecture}>
          <div className={styles.imagehover}>
            <img
              src="assets/Ellipse 36.svg"
              className={styles.image}
              alt="Card image cap"
            />
            <img className={styles.imageinline} src="assets/hover.svg" />
          </div>
          <b className={styles.labelname}>Raana</b>
          <p className={styles.labeldesc}>choose your project type</p>
          <button className={styles.viewbutton}>View more</button>
        </div>
      </div>


      <div ></div>
       

      <div></div>
    </Carousel>
  );
}
export default Architectcarousal;
