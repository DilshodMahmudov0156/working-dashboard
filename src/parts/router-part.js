import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "../components/customers";
import LeeftSide from "./leeft-side";

function RouterPart() {
    return (
        <Router>
            <div className="d-flex">
                <LeeftSide/>
                <div className="right">
                    <Routes>
                        <Route path="/customer" element={<Customers/>}/>
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default RouterPart;