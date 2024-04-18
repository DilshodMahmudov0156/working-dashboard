import React from 'react';
import Thead from "./thead";
import Tbody from "./tbody";

function Table() {
    return (
        <table className="my-table">
            <Thead/>
            <br/>
            <Tbody/>
        </table>
    );
}

export default Table;