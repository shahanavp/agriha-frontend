import React from "react";

import styles from "../style/addonsingle.module.css";
function Addonsingle() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />

          <div className={styles.input} type="text">
            <p>Structural drawing ( ₹15/sq.ft )</p>
          </div>
        </div>

        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio2"
            value="radio2"
          />

          <div className={styles.input} type="text">
            <p>MEP drawing ( ₹15/sq.ft ) </p>
          </div>
        </div>

        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio3"
            value="radio3"
          />

          <div className={styles.input} type="text">
            <p>Landscape drawing ( ₹10 - 15/sq.ft ) </p>
          </div>
        </div>

        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio4"
            value="radio4"
          />

          <div className={styles.input} type="text">
            <p>
              Land Survey ( min ₹5000. Extra charges applied as per distance and
              site area ){" "}
            </p>
          </div>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio5"
            value="radio5"
          />

          <div className={styles.input} type="text">
            <p>Material palette and selection services ( ₹15000 - ₹25000 ) </p>
          </div>
        </div>

        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio5"
            value="radio5"
          />
           
          <div className={styles.input} type="text">
            <p>
              Per site visit charge ( ₹2500 for Calicut and Malappuram. Extra
              charges applicable as per distance. Travel and accommodation extra
              )
            </p>
          </div>
        </div>

        <div className={styles.tabledatalast}>
         
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
      <div className={styles.termsandcondition}>
        <a className={styles.link} href="">Terms and conditions apply</a>
      </div>
    </div>
  );
}
export default Addonsingle;
