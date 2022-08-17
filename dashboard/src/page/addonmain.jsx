import React from "react";
import Addonsingle from "../component/addonsingle";
import Headernew from "../component/headernew";
import styles from "../style/addonmain.module.css";
function Addonmain() {
  return (

    <div className={styles.maindiv}>
      <div className={ styles.addon}>
        <div>
        <Headernew />
        <Addonsingle/>
        </div>
      </div>
     
    </div>


  );
}
export default Addonmain;
