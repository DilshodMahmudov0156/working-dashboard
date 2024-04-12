import React from 'react';
import Table from "./table";
import FilterBar from "./filter-bar";

function Customers({}) {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xl-11">
                    <div className="right-heading">
                        <h2>Customer</h2>
                        <div className="company">
                            <img src="" alt=""/>
                            <p className="text">Name</p>
                        </div>
                    </div>
                    <div className="my-card">
                        <FilterBar/>
                        <Table/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customers;