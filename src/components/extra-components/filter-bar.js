import React from 'react';

function FilterBar({}) {
    return (
        <div className="filter-bar">
            <div className="filter-bar-top">
                <button className="filter-btn active">
                    All Employees
                    <div className="my-badge">0</div>
                </button>
                <button className="filter-btn">
                    Active
                    <div className="my-badge">0</div>
                </button>
                <button className="filter-btn">
                    Inactive
                    <div className="my-badge">0</div>
                </button>
                <button className="filter-btn">
                    Terminated
                    <div className="my-badge">0</div>
                </button>
            </div>
            <div className="filter-bar-bottom">
                <div className="search-bar">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search for employee ID, name, status or something"/>
                </div>

                <div className="filter-btn-group">
                    <button className="filter-toggle">
                        <i className="bi bi-sort-down"></i>
                        Filter
                    </button>
                    <button className="add"><span>+</span> Add</button>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;