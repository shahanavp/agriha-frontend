import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Basicdetails from "./basicdetails";
import Apartmentbdetails from "./apartmentbdetails";
import { borderBottom } from "@mui/system";
import { blue, red, yellow } from "@mui/material/colors";
import Requirement from "./requirement";
import Addonservice from "./addonservice";
import Bdetailselect1 from "./Apartment";
export default function Bdetailselect() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" ,}}>
      <TabContext value={value}>
        <Box
          style={{ backgroundColor: "#EEEEEE", margin: "14px 10px" }}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            borderRadius: "5px 5px 0px 0px",
           
          }}
        >
          <TabList
            TabIndicatorProps={{
              style: {
                background:
                  "linear-gradient(270deg, #018C70 7.34%, #018C70 62.02%, #0C6A9E 62.02%)"
              },
            }}
            // textColor="linear-gradient(270deg, #018C70 7.34%, #018C70 62.02%, #0C6A9E 62.02%)"
             textColor="primary"
            // textColor="inherit"
            onChange={handleChange}
            aria-label="lab API tabs example"
          
          >
            <Tab
              style={{ fontWeight: 300, fontSize: "11px", width: "30%" ,textColor:"linear-gradient(270deg, #018C70 7.34%, #018C70 62.02%, #0C6A9E 62.02%)"}}
              label="Basic details"
              // textColor="linear-gradient(270deg, #018C70 7.34%, #018C70 62.02%, #0C6A9E 62.02%)"
              value="1"
          
            />
            <Tab
              style={{ fontWeight: 300, fontSize: "11px", width: "30%" }}
              label="Requirements"
              value="2"
            />
            <Tab
              style={{ fontWeight: 300, fontSize: "11px", width: "30%" }}
              label="Add on service"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ backgroundColor: "white",margin:"1rem",borderBottom:"2rem solid #f7f7f7"}}>
          <Basicdetails /> 
        </TabPanel>
        <TabPanel style={{ backgroundColor: "white",margin:"1rem" ,borderBottom:"2rem solid #f7f7f7"}} value="2">
          <Requirement />
        </TabPanel>
        <TabPanel  style={{ backgroundColor: "white",margin:"1rem",borderBottom:"2rem solid #f7f7f7" }} value="3">
          <Addonservice />
        </TabPanel>
      </TabContext>
    </Box>


    
  );
}

// import React from "react";
// import styles from '../style/bdetailselect.module.css'
// import Tabledetails from "./tabledetails";
// function Bdetailselect() {
//   return (
//     <div>
//     <div className={styles.headerdiv}>
//       <div className={styles.labelheader}>Basic details</div>
//       <div className={styles.labelheader1}>Requirements</div>
//       <div className={styles.labelheader2}>Add on services</div>
//     </div>
//     <Tabledetails />
//     </div>
//   );
// }
// export default Bdetailselect;
