import React from "react";
import styles from "../style/basicdetails.module.css";
import styless from "../style/apartmentbdetails.module.css";
function Apartmentbdetails() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.tableheader}>
        <p className={styles.labeltableheader}>Details</p>
        <div className={styles.editandvalue}>
          <p className={styles.labeltableheader1}>Values</p>
          <p className={styles.labeltableheader2}>Edit</p>
        </div>
      </div>

      <div className={styles.tabledatamain}>
        <p className={styles.tabledata}>Total area in sqft</p>
        <div className={styles.editandvalue1}>
          <p className={styles.tabledata1}>6000</p>
          <img className={styles.editimg} src="assets/Group 61.svg" />
        </div>
      </div>

      <div className={styles.tabledatamain}>
        <p className={styles.tabledata}>Budget</p>
        <div className={styles.editandvalue1}>
          <p className={styles.tabledata1}>50,00000</p>
          <img className={styles.editimg} src="assets/Group 61.svg" />
        </div>
      </div>

      <div className={styless.description} contentEditable>
        <p className={styless.labeldescription}>Type description here</p>
      </div>

      <div className={styles.tabledatalast}>
        <div className={styles.imgandupload}>
          <img
            className={styles.uploadimage}
            src="assets/Group 135.svg"
            height="15px"
            width="15px"
          />
          <a href="" className={styles.labelupload}>
            Customer care
          </a>
        </div>
        <div className={styles.editandvalue1}>
          {/* <p className={styles.tabledata1}>6000</p> */}
          <button type="button" className={styles.discardbutton}>
            Discard
          </button>
          <button type="button" className={styles.savebutton}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
export default Apartmentbdetails;
