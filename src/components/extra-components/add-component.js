import React from 'react';

function AddComponent({}) {
    return (
        <div className="container-fluid create-part">
            <div className="row">
                <div className="col-md-6">
                    <p className="my-label">Full name</p>
                    <input type="text" className="my-input"/>
                    <p className="my-label">Username</p>
                    <input type="text" className="my-input"/>
                    <p className="my-label">Password</p>
                    <input type="password" className="my-input"/>
                </div>
                <div className="col-md-6">
                    <p className="my-label">Phone number</p>
                    <input type="number" placeholder="+998" className="my-input"/>
                    <p className="my-label">Role</p>
                    <select name="" id="" className="my-input">
                        <option value="">Default</option>
                        <option value="admin">ADMIN</option>
                        <option value="transport">TRANSPORT</option>
                        <option value="operator">OPERATOR</option>
                        <option value="washer">WASHER</option>
                        <option value="packager">PACKAGER</option>
                        <option value="manager">MANAGER</option>
                    </select>

                    <p className="my-label">Status</p>
                    <select name="" id="" className="my-input">
                        <option value="">Default</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="terminated">Terminated</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default AddComponent;