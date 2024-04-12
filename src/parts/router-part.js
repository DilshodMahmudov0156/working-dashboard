import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "../components/customers";
import LeftSide from "./left-side";

function RouterPart() {
    return (
        <Router>
            <div className="d-flex">
                <LeftSide/>
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