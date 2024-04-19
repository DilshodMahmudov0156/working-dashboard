import React, {useState} from 'react';

function AddComponent({}) {
    const [ name, setName ] = useState('');
    const [ user, setUser ] = useState('');
    const [ pass, setPass] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ role, setRole] = useState('');
    const [ status, setStatus] = useState('');
    const [ err, setErr] = useState({
        nameErr: false,
        userErr: false,
        passErr: false,
        phoneErr: false,
        roleErr: false,
        statusErr: false,
    });

    const phoneGet = (e) => {
        if(e.target.value.length >= 10){
            setPhone(phone);
        }
        else if(phone.length <= 9){
            setPhone(e.target.value);
        }
    }
    const submitter = (e) => {
        e.preventDefault();
        // console.log();
        if (phone.length < 9){
            setErr({...err, phoneErr: true});
        } else{
            const newObj = {
                name: name,
                userName: user,
                password: pass,
                phone: phone,
                role: role,
                status: status
            }
            setPhone("");
            console.log(newObj);
            e.target.reset();
        }
    }
    return (
        <div className="container-fluid create-part">
            <form className="row" onSubmit={(e) => {submitter(e)}}>
                <div className="col-md-6">
                    <button className="btn btn-primary">click on it</button>

                    <p className="my-label">Full name</p>
                    <input
                        type="text"
                        className={err.nameErr?"my-input border border-danger": "my-input"}
                        onChange={
                        (e) => {
                        setName(e.target.value)
                        }}
                    />

                    <p className="my-label">Username</p>
                    <input
                        type="text"
                        className={err.userErr?"my-input border border-danger": "my-input"}
                        onChange={
                        (e) => {
                        setUser(e.target.value)
                        }}
                    />

                    <p className="my-label">Password</p>
                    <input
                        type="password"
                        className={err.passErr?"my-input border border-danger": "my-input"}
                        onChange={
                        (e) => {
                        setPass(e.target.value)
                        }}
                    />
                </div>

                <div className="col-md-6">

                    <p className="my-label">Phone number</p>
                    <input
                        type="number"
                        placeholder="+998"
                        className={err.phoneErr?"border border-danger my-input":"my-input"}
                        onChange={
                        (e)=>{phoneGet(e)
                        }}
                        value={phone}
                    />

                    <p className="my-label">Role</p>
                    <select
                        className={err.roleErr?"my-input border border-danger": "my-input"}
                        onChange={
                        (e) => {setRole(e.target.value)
                        }}>
                        <option value="nothing">Default</option>
                        <option value="admin">ADMIN</option>
                        <option value="transport">TRANSPORT</option>
                        <option value="operator">OPERATOR</option>
                        <option value="washer">WASHER</option>
                        <option value="packager">PACKAGER</option>
                        <option value="manager">MANAGER</option>
                    </select>

                    <p className="my-label">Status</p>
                    <select
                        className={err.roleErr?"my-input border border-danger": "my-input"}
                        onChange={
                        (e)=>{setStatus(e.target.value)
                        }}>
                        <option value="nothing">Default</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="terminated">Terminated</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default AddComponent;