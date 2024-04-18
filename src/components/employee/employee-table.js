import React from 'react';
import EmployeeTbody from "./employee-tbody";

function EmployeeTable() {
    return (
        <table className="my-table">
            <thead>
            <tr>
                <th>
                    <p className="for-padding">EMPLOYEE ID</p>
                </th>
                <th>FULL NAME</th>
                <th>USERNAME</th>
                <th>PASSWORD</th>
                <th>ROLE</th>
                <th>STATUS</th>
            </tr>
            </thead>
            <br/>
            <EmployeeTbody/>
        </table>
    );
}

export default EmployeeTable;