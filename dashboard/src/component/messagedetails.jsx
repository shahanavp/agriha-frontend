import React from "react";
import styles from "../style/messagedetails.module.css";

function Messagedetails() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.background}>
        <div className={styles.padding}>
          <div className={styles.togglebutton}>
            <button className={styles.historybutton}>history</button>
            <button className={styles.starredbutton}>starred</button>
          </div>

          <div className={styles.sort}>
            <img src="assets/Group 138.svg" width="25px" height="25px" />
            <p className={styles.labelsort}>Sort</p>
          </div>

          <div className={styles.profile}>
            <img src="assets/Group 165.svg" height="35px" width="35px" />
            <div className={styles.labelname}>
              <p>Vishnu</p>
              <div className={styles.dateandtime}>
                <p className={styles.labeldatetime}>13 June 22 Monday</p>
                <p className={styles.labeldatetime}>12:01 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.padding}>
          <div className={styles.userdata}>
            <div className={styles.details}>
              <div className={styles.startime}>
                <img
                  className={styles.userphoto}
                  src="assets/unsplash_ksbXoAsU7Bo.svg"
                />
                <p className={styles.labelusername}>Althaf Rahman</p>
              </div>

              <div className={styles.startime}>
                <img src="assets/Vector (12).svg" width="10px" height="10px" />
                <p className={styles.labeltime}>12:00 PM</p>
              </div>
            </div>
            <div>
              <p className={styles.description}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>
            <div className={styles.seen}>
              <img
                src="assets/checkmark-circle-2.svg"
                width="12px"
                height="12px"
              />
              <p className={styles.labelseen}>seen</p>
            </div>
            <div>
              {" "}
              <hr />
            </div>
          </div>

          <div className={styles.userdata}>
            <div className={styles.details}>
              <div className={styles.startime}>
                <img
                  className={styles.userphoto}
                  src="assets/Group 165.svg"
                  height="35px"
                  width="35px"
                />
                <p className={styles.labelusername}>Vishnu</p>
              </div>

              <div className={styles.startime}>
                <img src="assets/Vector (14).svg" width="10px" height="10px" />
                <p className={styles.labeltime}>12:01 PM</p>
              </div>
            </div>
            <div>
              <p className={styles.description}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </p>
            </div>
            {/* <div className={styles.seen}>
                <img
                  src="assets/checkmark-circle-2.svg"
                  width="12px"
                  height="12px"
                />
                <p className={styles.labelseen}>seen</p>
              </div> */}
            <div>
              {" "}
              <hr />
            </div>
          </div>

          <div className={styles.userdata}>
            <div className={styles.details}>
              <div className={styles.startime}>
                <img
                  className={styles.userphoto}
                  src="assets/unsplash_ksbXoAsU7Bo.svg"
                />
                <p className={styles.labelusername}>Althaf Rahman</p>
              </div>

              <div className={styles.startime}>
                <img src="assets/Vector (12).svg" width="10px" height="10px" />
                <p className={styles.labeltime}>12:01 PM</p>
              </div>
            </div>
            <div>
              <p className={styles.description}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>
            <div className={styles.seen}>
              <img
                src="assets/checkmark-circle-2 (1).svg"
                width="12px"
                height="12px"
              />
              <p className={styles.labelseen}>seen</p>
            </div>
            <div className={styles.line}>
              {" "}
              <hr />
            </div>
          </div>
          <div className={styles.inputtype}>
            <div className={styles.inputbox} contentEditable>
              <p className={styles.labeltype}>Type something here</p>
            </div>

            <div className={styles.gap}>
              <img src="assets/Vector 40.svg" height="25px" />
              <img src="assets/Group 160.svg" width="25px" height="25px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Messagedetails;
