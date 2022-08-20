import React from "react";
import styles from "../style/architectdetails.module.css";
import Architectcarousal from "./architectcarousal";
function Architectdetails() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.architectheader}>
        <p className={styles.labelarchitect}>Residence Architects</p>
        <div className={styles.searchsort}>
          <div className={styles.search} contentEditable>
            {/* <img className={styles.imgsearch} src="assets/search (1).svg"/>
            <input className={styles.labelsearch} type="text" placeholder="search"/> */}
            <img className={styles.imgsearch} src="assets/search (1).svg" />
            <p className={styles.labelsearch}>Search architect</p>
          </div>

          <div className={styles.sort}>
            <img src="assets/Group 138 (1).svg" width="25px" height="25px" />
            <p className={styles.labelsort}>Sort</p>
          </div>
          <div className={styles.sort}>
            <img src="assets/Vector (9).svg" width="16px" height="16px" />
            <p className={styles.labelsort}>Filter</p>
          </div>
        </div>
      </div>
      <div>
        <Architectcarousal />
      </div>
      <div className={styles.datalast}>
        <div>
          <button type="button" className={styles.skipbutton}>
            Skip
          </button>
        </div>
        <div>
          <button type="button" className={styles.nextbutton}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default Architectdetails;
