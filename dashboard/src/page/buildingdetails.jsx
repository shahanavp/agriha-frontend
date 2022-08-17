import React from "react";
import Apartmentbdetails from "../component/apartmentbdetails";
import Bdetailselect from "../component/bdetailselect";
import Category from "../component/category";
import Header from "../component/header";
import Sidebar from "../component/sidebar";
import styles from "../style/buildingdetails.module.css";
import Settings from "./message";

import Transaction from "./transaction";
function Buildingdetails() {
  return (
    <div className={styles.maindiv}>
      <div style={{width:"20%"}}>
       
        <Sidebar />
      </div>
      <div  style={{width:"79%"}}>
        <Header />
        <Category />
       
       

   
      
      </div>
    </div>
  );
}
export default Buildingdetails;
