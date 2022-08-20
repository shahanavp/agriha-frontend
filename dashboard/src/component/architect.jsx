import React from "react";
import styles from "../style/architect.module.css";
function Architect() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.architect}>
        <p className={styles.labelarchitect}>Architect</p>
        <p className={styles.labeldescription1}>
          Lorem Ipsum has been the industry's lorem Ipsum
        </p>
      </div>

      <div className={styles.architectgallery}>
        <div className={styles.card}>
          <div className={styles.Architectdetails}>
            <img src="assets/Rectangle 36.svg" width="50px" height="50px" />
            <div className={styles.name}>
              <p className={styles.labelname}>Jenifer</p>
              <p className={styles.labelarch}>Architect</p>
            </div>
            <button className={styles.viewbutton}>View more</button>
          </div>
          <div className={styles.description}>
            <p className={styles.labeldescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p className={styles.labelblue}>Experience</p>
            <p className={styles.labeldescrip}>Lorem Ipsum is simply dummy</p>
            <p className={styles.labelblue}>Lorem Ipsum </p>
            <p className={styles.labeldescrip}>Lorem Ipsum is simply dummy</p>
          </div>
        </div>

        <div className={styles.projectgallery}>
          <p className={styles.labelprojectgallery}>Project gallery</p>
          <div className={styles.images}>
            <img src="assets\Rectangle 226.svg" height="170px" width="170px"/>
            <img src="assets\Rectangle 227.svg" height="170px" width="170px"/>
            <img src="assets\Rectangle 228.svg" height="170px" width="170px" />
          </div>
          <a  className={styles.viewmore} href="">view more</a>
        </div>
      </div>
    </div>
  );
}
export default Architect;
