import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buildingdetails from "./page/buildingdetails"
import Transaction from "./page/transaction";
import Message from "./page/message";
import Projectdetails from "./page/projectdetails";
import Addonmain from "./page/addonmain";
import Choosearchitect from "./page/choosearchitect";
import Addoncheckbox from "./page/addoncheckbox";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/buildingdetails" element={<Buildingdetails />} />
        <Route path="/transaction" element ={<Transaction/>} />
        <Route path="/message" element ={<Message/>} />
        <Route path="/projectdetails" element ={<Projectdetails/>} />
        <Route path="/addonmain" element ={<Addonmain/>} />
        <Route path="/choosearchitect" element ={<Choosearchitect/>} />
        <Route path="/addoncheckbox" element ={<Addoncheckbox/>} />
      </Routes>
    </Router>
  );
}


export default App;
