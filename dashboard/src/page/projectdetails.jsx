import React from "react";
import Headerprojectdetails from "../component/headerprojectdetails";
import Projectcomponents from "../component/projectcomponents";
import Architect from "../component/architect";
import Sidebar from "../component/sidebar";
import styles from "../style/buildingdetails.module.css";
function Projectdetails() {
  return (
    <div className={styles.maindiv}>
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "79%" }}>
       <Headerprojectdetails />
       <div style={{backgroundColor:"#f2f2f2",padding:"0.8rem",margin:"1rem"}}>
       <Projectcomponents />
       
       </div>
      
      </div>
    </div>
  );
}
export default Projectdetails;