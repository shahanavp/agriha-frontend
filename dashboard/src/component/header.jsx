import React from "react";

import styles from "../style/header.module.css";

function Header() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.buildspacebell}>
      <p className={styles.labelBuilddetails}>Building details</p>
      <div className={styles.imageinline}>
      <img className={styles.bell} src="assets/Vector.svg" />
      <img className={styles.innerimage} src="assets/Ellipse 1 (1).svg"/>
      </div>
      </div>
      <div className={styles.search}>
        <img className={styles.imgsearch} src="assets/search (1).svg" />
        <p className={styles.labelsearch}>search</p>
      </div>
      <div className={styles.createbutton}>
        <img className={styles.imgadd} src="assets/Vector (1).svg" />
        <p className={styles.labelcreatproject}>Create a project</p>
      </div>
    </div>
  );
}

export default Header;
