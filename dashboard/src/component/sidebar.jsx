import React from "react";
import styles from "../style/sidebar.module.css";
const Sidebar = () => {
  const addClass = (e) => {
    // alert(e.target.element);
  };
  const viewPages = () => {
    document.getElementById("linkComponent").style.display = "block";
    document.getElementById("downIcon").style.display = "none";
    document.getElementById("upIcon").style.display = "block";
  };
  const hidePages = () => {
    document.getElementById("linkComponent").style.display = "none";
    document.getElementById("downIcon").style.display = "block";
    document.getElementById("upIcon").style.display = "none";
  };

  return (
    <div className={styles.main}>
      {/*  *********************** Profile Section *********************************  */}
      <img src="assets/agrihaLogo.svg" alt="" className={styles.logo} />
      <div className={styles.profile}>
        <img src="assets/profilepic.svg" alt="" className={styles.profilePic} />
        <span className={styles.profileName}>
          <h4>profile name</h4>
          <p>premium</p>
        </span>
      </div>
      <div className={styles.profileDetails}>
        <img
          src="assets/projectdetailsIcon.svg"
          alt=""
          className={styles.profileSubIcon}
        />
        <p className={styles.profileSubLabel}>Project Details</p>
      </div>
      {/* ************************************************************* */}

      {/* *********************** Pages section *********************** */}

      <div className={styles.pages}>
        <div className={styles.pagesHead}>
          <h4>Pages</h4>
          <img
            src="assets/downIcon.svg"
            alt=""
            className={styles.pageIcon}
            id="downIcon"
            onClick={viewPages}
          />
          <img
            src="assets/upIcon.svg"
            alt=""
            className={styles.upicon}
            id="upIcon"
            onClick={hidePages}
          />
        </div>
        <div
          className={styles.linkComponent}
          id="linkComponent"
        >
          <div
            className={`${styles.pagesLink} ${styles.borderLeft}`}
            onClick={addClass}
            id="dashboard"
          >
            <img src="assets/dashboardIcon.svg" alt=""  />
            <p className={styles.pagesLinkName} >
              Dashboard
            </p>
          </div>
          <div
            className={styles.pagesLink}
            id="buildingdetails"
            onClick={addClass}
          >
            <img src="assets/buildingdetailsIcon.svg" alt="" />
            <p className={styles.pagesLinkName}>Building Details</p>
          </div>
          <div className={styles.pagesLink} onClick={addClass} id="transaction">
            <img src="assets/transactionIcon.svg" alt="" />
            <p className={styles.pagesLinkName}>Transaction</p>
          </div>
          <div className={styles.pagesLink} id="time" onClick={addClass}>
            <img src="assets/timeIcon.svg" alt="" />
            <p className={styles.pagesLinkName}>Time Schedule</p>
          </div>
          <div className={styles.pagesLink} id="settings" onClick={addClass}>
            <img src="assets/settingsIcon.svg" alt="" />
            <p className={styles.pagesLinkName}>Settings</p>
          </div>
          <div className={styles.pagesLink} id="messages" onClick={addClass}>
            <img src="assets/messageIcon.svg" alt="" />
            <p className={styles.pagesLinkName}>Messages</p>
          </div>
        </div>
        <div className={styles.borderBottomLine}></div>
      </div>

      {/* ************************************************************* */}

      {/* *********************status indicators************************ */}

      <div className={styles.statusIndicators}>
        <h4>Status Indicator</h4>
        <img src="assets/downIcon.svg" alt="" />
      </div>

      {/* ************************************************************* */}

      {/* *********************** footer section *********************** */}
      <div className={styles.footer}>
        <span className={styles.footerSpan}>
          <img src="assets/helpIcon.svg" alt="" />
          <p className={styles.footerLabel}>Help Center</p>
        </span>
        <span className={styles.footerSpan}>
          <img src="assets/logoutIcon.svg" alt="" />
          <p className={styles.footerLabelLogout}>Log out</p>
        </span>
      </div>
      {/* ************************************************************* */}
    </div>
  );
};

export default Sidebar;
