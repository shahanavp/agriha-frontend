import React from "react";
import Addonlist from "../component/addonlist";

import Headernew from "../component/headernew";
import styles from "../style/addoncheckbox.module.css";
function Addoncheckbox() {
  return (

    <div className={styles.maindiv}>
      <div className={ styles.addon}>
        <div>
        <Headernew />
         <Addonlist />
        </div>
      </div>
     
    </div>


  );
}
export default Addoncheckbox;