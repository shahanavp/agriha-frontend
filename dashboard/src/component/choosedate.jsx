// import React from "react";
// import styles from "../style/choosedate.module.css";
// import Transactiontableheader from "./transationtableheader";
// function Choosedate() {
//   return (
//     <div className={styles.maindiv}>
//       <p className={styles.labelchoosedate}>Choose a date</p>

//       <div>
//         <form>
//         <label for="birthday">Birthday:</label>
//   <input type="date" id="birthday" name="birthday"/>
//   <input type="submit"/>
//         </form>

//       </div>
//       <Transactiontableheader />
//     </div>
//   );
// }
// export default Choosedate;

import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "../style/choosedate.module.css";
import Transactiontableheader from "./transationtableheader";
export default function Choosedate() {
  const [from, setFromvalue] = React.useState(null);
  const [to, setTovalue] = React.useState(null);
  return (
    <div className={styles.maindiv}>
      <p className={styles.labelchoosedate}>Choose a date</p>
      <div className={styles.datepicker}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="From"
            value={from}
            onChange={(newValue) => {
              setFromvalue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{
                  boxSizing:"border-box",
                  borderWidth: "none",
                  // inlineSize:"10rem",
                  // backgroundColor:"red",
                  width: "10rem",
                  marginLeft: "0.5rem",
                }}
              />
            )}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="To"
            value={to}
            onChange={(newValue) => {
              setTovalue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{
                  borderWidth: "none",
                  width: "10rem",
                  marginLeft: "1rem",
              
                }}
              />
            )}
          />
        </LocalizationProvider>
        <div className={styles.space}> 
        <div className={styles.sort}>
          <img src="assets/Group 138.svg" width="20px" height="20px" />
          <a className={styles.labelsort}>Sort</a>
        </div>
        <div className={styles.customercare}>
          <img
            src="assets/Group 135.svg"
            height="15px"
            width="15px"
          />
          <a href="" className={styles.labelcustomercare}>
            Customer care
          </a>
          </div>
        </div>
      </div>

      <div>
        <Transactiontableheader />
      </div>
    </div>
  );
}

// import * as React from 'react';
// import isWeekend from 'date-fns/isWeekend';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import Transactiontableheader from "./transationtableheader";
//  import styles from "../style/choosedate.module.css";
// export default function Choosedate() {
//   const [value, setValue] = React.useState(new Date());

//   return (
//     <div className={styles.maindiv}>
//     <p className={styles.labelchoosedate}>Choose a date</p>
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StaticDatePicker
//         orientation="landscape"
//         openTo="day"
//         value={value}
//         shouldDisableDate={isWeekend}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>

//        <Transactiontableheader />
//     </div>

//   );
// }
