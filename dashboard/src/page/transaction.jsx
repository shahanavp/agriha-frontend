import React from "react";
import Choosedate from "../component/choosedate";
import Headertransaction from "../component/headertransaction";
import Sidebar from "../component/sidebar";
import styles from "../style/buildingdetails.module.css";
function Transaction() {
  return (
    <div className={styles.maindiv}>
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "79%" }}>
        <Headertransaction />
        <Choosedate />
      </div>
    </div>
  );
}
export default Transaction;
