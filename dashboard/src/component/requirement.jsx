import React from "react";
import styles from "../style/basicdetails.module.css";
import styless from "../style/requirement.module.css";
function Requirement() {
  return (
    <div  className={styles.maindiv}>
     
        <div className={styles.tableheader}>
          <p className={styles.labeltableheader}>List</p>
          <div className={styles.editandvalue}>
            <p className={styles.labeltableheader1}>Current Status</p>
            <p className={styless.labeledit}>Edit</p>
          </div>
        </div>
     

      
        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>sitout</p>
          <div className={styles.editandvalue1}>
            <p className={styless.selected}>selected</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>
      
      
        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>Formal Living Area</p>
          <div className={styles.editandvalue1}>
            <p className={styless.notselected}>Not selected</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>
      
      
        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>Kids bedrooms</p>
          <div className={styles.editandvalue1}>
            <p className={styless.notselected}>Not selected</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>
     
        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>Dining room</p>
          <div className={styles.editandvalue1}>
            <p className={styless.selected}>Selected</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>

        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>Store room</p>
          <div className={styles.editandvalue1}>
            <p className={styless.notselected}>Not selected</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>

        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>Game room</p>
          <div className={styles.editandvalue1}>
            <p className={styless.selected}>Selected</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>
      
        <div className={styles.tabledatalast}>
          <div className={styles.imgandupload}>
          <img className={styless.arrow} src="assets\Vector (5).svg" height="10px" width="10px"/>
          <p className={styless.number}>1/3</p>
          <img className={styless.arrow} src="assets\Vector (6).svg"  height="10px" width="10px"/>
          </div>
          <div className={styles.editandvalue1}>
            {/* <p className={styles.tabledata1}>6000</p> */}
            <button type="button" className={styles.discardbutton}>Discard</button>
            <button type="button" className={styles.savebutton}>Save Changes</button>
          </div>
        </div>
      
    </div>
  );
}
export default Requirement;