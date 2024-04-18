import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "../components/customer/customers";
import LeftSide from "./left-side";
import Employee from "../components/employee/employee";

function RouterPart() {
    return (
        <Router>
            <div className="d-flex">
                <LeftSide/>
                <div className="right">
                    <Routes>
                        <Route path="/customer" element={<Customers/>}/>
                        <Route path="/employee" element={<Employee/>}/>
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default RouterPart;