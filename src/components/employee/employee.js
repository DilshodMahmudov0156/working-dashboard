import React from 'react';
import FilterBar from "../extra-components/filter-bar";
import Table from "../customer/table";
import EmployeeTable from "./employee-table";
import AddComponent from "../extra-components/add-component";

function Employee() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xl-11">
                    <div className="right-heading">
                        <h2>Employee</h2>
                        <div className="company">
                            <img src="" alt=""/>
                            <p className="text">Name</p>
                        </div>
                    </div>
                    <div className="my-card">
                        <FilterBar/>
                        {/*<EmployeeTable/>*/}
                        <AddComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employee;