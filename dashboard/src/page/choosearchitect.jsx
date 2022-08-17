import React from "react";
import Architectheader from "../component/architectheader";
import styles from "../style/addonmain.module.css";
import Architectdetails from "../component/architectdetails";
function Choosearchitect() {
  return (

    <div className={styles.maindiv}>
      <div className={styles.addon}>
        <div>
        <Architectheader />
        <Architectdetails />
        </div>
      </div>
     
    </div>


  );
}
export default Choosearchitect;