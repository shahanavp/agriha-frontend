import React from "react";
import Messagedetails from "../component/messagedetails";
import Messageheader from "../component/messageheader";
import Sidebar from "../component/sidebar";
import styles from "../style/buildingdetails.module.css";
function Message() {
    return (
        <div className={styles.maindiv}>
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "79%" }}>
      <Messageheader/>
      <Messagedetails />

      </div>
    </div>
        
    )}
    export default Message;