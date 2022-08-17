import React from "react";
import styles from "../style/basicdetails.module.css";
function Basicdetails() {
  return (
    <div  className={styles.maindiv}>
     
        <div className={styles.tableheader}>
          <p className={styles.labeltableheader}>Details</p>
          <div className={styles.editandvalue}>
            <p className={styles.labeltableheader1}>Values</p>
            <p className={styles.labeltableheader2}>Edit</p>
          </div>
        </div>
     

      
        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>Total area in sqft</p>
          <div className={styles.editandvalue1}>
            <p className={styles.tabledata1}>6000</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>
      
      
        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>Number of floors</p>
          <div className={styles.editandvalue1}>
            <p className={styles.tabledata1}>6000</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>
      
      
        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>Number of bedrooms</p>
          <div className={styles.editandvalue1}>
            <p className={styles.tabledata1}>6000</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>
     
        <div className={styles.tabledatamain}>
          <p className={styles.tabledata}>Number of attached bathrooms</p>
          <div className={styles.editandvalue1}>
            <p className={styles.tabledata1}>6000</p>
            <img className={styles.editimg} src="assets/Group 61.svg" />
          </div>
        </div>
      
        <div className={styles.tabledatalast}>
          <div className={styles.imgandupload}>
          <img className={styles.uploadimage} src="assets/Group 134.svg" height="15px" width="15px"/>
          <a href="" className={styles.labelupload}>Document upload</a>
          </div>
          <div className={styles.editandvalue1}>
            {/* <p className={styles.tabledata1}>6000</p> */}
            <button type="button" className={styles.discardbutton}>Discard</button>
            <button type="button" className={styles.savebutton}>Save Changes</button>
          </div>
        </div>
      
    </div>
  );
}
export default Basicdetails;

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor:"#F5FBFF",
//     color: "#0C6A9E",

//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,

//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: "white",
//     border:0

//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(details, value, edit) {
//   return { details, value, edit};
// }

// const rows = [
//   createData('Total area in sqft', 6000,6.0),
//   createData('Number of floors', 7000, 9.0),
//   createData('Number of bedrooms', 8000, 16.0),
//   createData('Number of attached bathrooms', 9000, 3.7),
//   createData('Document upload', 6000, 16.0),
// ];

// export default function CustomizedTables() {
//   return (
//     <TableContainer component={Paper} style={{border:"none",width:"50%",alignItems:"center",outline:"none"}}>
//       <Table aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Details </StyledTableCell>
//             <StyledTableCell align="right">Values</StyledTableCell>
//             <StyledTableCell align="right">Edit</StyledTableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.details}>
//               <StyledTableCell component="th" scope="row">
//                 {row.details}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.value}</StyledTableCell>
//               <StyledTableCell align="right">{row.edit}</StyledTableCell>

//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
