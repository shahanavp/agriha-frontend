import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "../style/projectcomponents.module.css";
import Architect from "./architect";
import { red } from "@mui/material/colors";
function Projectcomponents() {
  // const [value, setValue] = React.useState(null);
  return (
    <div className={styles.maindiv}>
      <div className={styles.residenceheader}>
        <div className={styles.headerleft}>
          <div>
            <img src="assets/Ellipse 12.svg" width="10px" height="10px" />
            <p className={styles.labelresidence }>Residence</p>
            <img
              className={styles.imgdown}
              src="assets/Vector (7).svg"
              width="10px"
              height="10px"
            />
          </div>
          <p className={styles.labelcontent}>
            Lorem Ipsum has been the industry's lorem Ipsum
          </p>
        </div>
        <div className={styles.headerright}>
          <button className={styles.viewbutton}>View documents</button>
          <button className={styles.upload}>
            <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <img src="assets/Vector (8).svg" width="11px" height="11px" />
            <a className={styles.labeluploadoc} href=""> Upload documents</a>
            </div>
          </button>
          <div className={styles.calender}>
            <img src="assets/Group 40.svg" height="25px" width="25px"/>
         
          <div className={styles.Date}>
            <p className={styles.labelcontent}>Starting date</p>
            <p className={styles.labeldate}>25 Apr 2030</p>
          </div>
          </div>

          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Starting date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{ padding: "0.1rem", width: "10rem", margin: "none" }}
                />
              )}
            />
          </LocalizationProvider> */}
        </div>
      </div>

      <div>
        <div className={styles.plan}>
          <div className={styles.inputalignment}>
            <p className={styles.labelinput}>Total area in sqft</p>
            <input
              type="text"
              placeholder="6000"
              // value="6000"
              className={styles.inputdetails}
            ></input>
          </div>
          <div className={styles.inputalignment}>
            <p className={styles.labelinput}>Number of floors</p>
            <input
              type="text"
              placeholder="2"
              // value="2"
              className={styles.inputdetails}
            />
          </div>
          <div className={styles.inputalignment}>
            <p className={styles.labelinput}>Number of bedrooms</p>
            <input
              type="text"
              placeholder="3"
              // value="3"
              className={styles.inputdetails}
            />
          </div>
        </div>

        <div className={styles.plan}>
          <div className={styles.inputalignment}>
            <p className={styles.labelinput}>Number of attached bathroom</p>
            <input
              type="text"
              placeholder="2"
              // value="2"
              className={styles.inputdetails}
            />
          </div>
          <div className={styles.inputalignment}>
            <p className={styles.labelinput}>Budget</p>
            <input
              type="text"
              placeholder="Budget"
              // value="budget"
              className={styles.inputdetails}
            />
          </div>
        </div>

        <div className={styles.inputalignment}>
          <button className={styles.editdetailsbutton}>Edit details</button>
        </div>
      </div>
      <div>
        <Architect />
      </div>
      <div className={styles.requirementlist}>
        <div className={styles.requirementheader}>
          <p className={styles.labellist}>Requirement List</p>
          <p className={styles.labelcontentreq}>
            Lorem Ipsum has been the industry's lorem Ipsum
          </p>
        </div>



        {/* <div className={styles.table}>
          <div className={styles.tableheader}>
            <p>List</p>
            <p>Selected date</p>
            <p>Item code</p>
            <p>Current status</p>
          </div>
          <div className={styles.tabledata}>
            <p>Sitout</p>
            <p>11/12/2026</p>
            <p>AAKSDGC</p>
            <p className={styles.selected}> Selected</p>
          </div>
          <div className={styles.tabledata}>
            <p>Formal Living Area</p>
            <p>11/12/2026</p>
            <p>326LKNAX</p>
            <p className={styles.selected}> Selected</p>
          </div>
          <div className={styles.tabledata}>
            <p>Kids Bedrooms</p>
            <p>11/12/2026</p>
            <p>JHBY2026</p>
            <p className={styles.selected}> Selected</p>
          </div>
          <div className={styles.tabledata}>
            <p>Dining Room</p>
            <p>11/12/2026</p>
            <p>CGXJ3475</p>
            <p className={styles.selected}> Selected</p>
          </div>
          <div className={styles.tabledata}>
            <p>Store Room</p>
            <p>11/12/2026</p>
            <p>HUHU3155</p>
            <p className={styles.selected}> Selected</p>
          </div>
          <div className={styles.tabledata}>
            <p>Game Room</p>
            <p>11/12/2026</p>
            <p>65465AXAI</p>
            <p className={styles.selected}> Selected</p>
          </div>
        </div> */}


        <div className={styles.table2}>
        <div className={styles.tablevertical}>
            <div className={styles.tableheader}>
              <p>List</p>
            </div>

            <p className={styles.tabledata}>sitout</p>
            <p className={styles.tabledata}>Formal Living Area</p>
            <p className={styles.tabledata}>Kids Bedrooms</p>
            <p className={styles.tabledata}>Dining Room</p>
            <p className={styles.tabledata}>Store Room</p>
            <p className={styles.tabledata}>Game Room</p>
          </div>

          <div className={styles.tablevertical}>
            <div className={styles.tableheader}>
              <p>Selected date</p>
            </div>

            <p className={styles.tabledata}>11/12/2026</p>
            <p className={styles.tabledata}>11/12/2026</p>
            <p className={styles.tabledata}>11/12/2026</p>
            <p className={styles.tabledata}>11/12/2026</p>
            <p className={styles.tabledata}>11/12/2026</p>
            <p className={styles.tabledata}>11/12/2026</p>
          </div>
          <div className={styles.tablevertical}>
            <div className={styles.tableheader}>
              <p>Item code</p>
            </div>

            <p className={styles.tabledata}>AAKSDGC</p>
            <p className={styles.tabledata}>326LKNAX</p>
            <p className={styles.tabledata}>JHBY2026</p>
            <p className={styles.tabledata}>CGXJ3475</p>
            <p className={styles.tabledata}>HUHU3155</p>
            <p className={styles.tabledata}>65465AXAI</p>
          </div>
          <div className={styles.tablevertical}>
            <div className={styles.tableheader}>
              <p>Current status</p>
            </div>

            <p className={styles.tabledataselected}>Selected</p>
            <p className={styles.tabledataselected}>Selected</p>
            <p className={styles.tabledataselected}>Selected</p>
            <p className={styles.tabledataselected}>Selected</p>
            <p className={styles.tabledataselected}>Selected</p>
            <p className={styles.tabledataselected}>Selected</p>
          </div>
          </div>



      </div>
    </div>
  );
}
export default Projectcomponents;
