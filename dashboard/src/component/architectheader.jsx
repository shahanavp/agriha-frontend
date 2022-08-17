import React from "react";
import styles from "../style/headernew.module.css";
function Architectheader() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        
          <div>
            <p className={styles.labeladdon}>Choose Architect</p>
            <p className={styles.sub}>
              Choose your project type hoose your project type
            </p>
          </div>
          <div>
            <img src="assets/Untitled-1-01 2.svg" width="80px" height="20px" />
            <p className={styles.labelimg}>
              An initiated by <b className={styles.bold}>ARCLIF</b>{" "}
            </p>
          </div>
       
      </div>
    </div>
  );
}
export default Architectheader;