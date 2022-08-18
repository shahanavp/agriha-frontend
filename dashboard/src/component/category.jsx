import React from "react";

import styles from "../style/category.module.css";
import Bdetailselect from "./bdetailselect";
import Apartment from "./Apartment";

import Interiorlandscape from "./interiorlandscape";
import Bdetailselect1 from "./bdetailselect1";
function Category() {
  const dropdownitem = ()=>{
   if(document.getElementById("dropdownitems").style.display = "none") {
    document.getElementById("dropdownitems").style.display = "block";
   }else{
    document.getElementById("dropdownitems").style.display="none"
  }
  // document.getElementById("dropdownitems").style.display = "block";
  // alert("000")
  };
  return (
    <div className={styles.maincategory}>
      <div className={styles.maindropdown}>
        <p className={styles.labelresidence}>Residence</p>
        <img className={styles.imgbar} src="assets/Vector 22 (1).svg" />
        <img className={styles.imgdownarrow} src="assets/Vector (3).svg" id= "dropdownimage" onClick={dropdownitem}/>
      </div>
      <div id ="dropdownitems" className={styles.dropdownitems}>
        <p className={styles.labeldropdownitems}>Apartments</p>
        <p className={styles.labeldropdownitems}>Interior (Residence)</p>
        <p className={styles.labeldropdownitems}>Landscaping (Residence)</p>
      </div>
      <div>  <Bdetailselect /> </div>
     {/* <div><Apartment /></div> */}
      {/* <div><Bdetailselect1 /></div> */}
      
    </div>
  );
}
export default Category;
