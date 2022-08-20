import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Basicdetails from "./basicdetails";
import Apartmentbdetails from "./apartmentbdetails";
import { borderBottom } from "@mui/system";
import { red, yellow } from "@mui/material/colors";
import Interiorlandscape from "./interiorlandscape";
export default function Bdetailselect1() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext style={{ marginTop: "0" }} value={value}>
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
                  "linear-gradient(270deg, #018C70 7.34%, #018C70 62.02%, #0C6A9E 62.02%)",
                color:
                  "linear-gradient(270deg, #018C70 7.34%, #018C70 62.02%, #0C6A9E 62.02%)",
              },
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="primary"
          >
            <Tab
              style={{ fontWeight:"bold", fontSize: "10px", width: "30%" }}
              label="Basic details"
              value="1"
            />
          </TabList> 
        </Box>
        <TabPanel
          value="1"
          style={{ backgroundColor: "white", margin: "1rem" ,borderBottom:"2rem solid #f7f7f7"}}
        >
          <Interiorlandscape />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
