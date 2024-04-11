import { NavLink } from "react-router-dom";

function LeeftSide() {

    const activer = ({isActive}) => {
        return isActive? "my-nav-link active": "my-nav-link";
    }
    return (
        <div className="left">
            <div className="for-nav">
                <a href="" className="company">
                    <img src="" alt=""/>
                    <p className="text">Taskin</p>
                </a>
                <NavLink to="/" className={activer}><i class="bi bi-house-door"></i> Dashboard</NavLink>
                <NavLink to="/finance" className={activer}><i class="bi bi-currency-dollar"></i> Finance</NavLink>
                <NavLink to="/call" className={activer}><i class="bi bi-telephone"></i> Call</NavLink>
                <NavLink to="/customer" className={activer}><i class="bi bi-person-workspace"></i> Customer</NavLink>
                <NavLink to="/order" className={activer}><i className="bi bi-clock"></i> Order</NavLink>
                <NavLink to="/product" className={activer}><i class="bi bi-box"></i> Product</NavLink>
                <NavLink to="/employee" className={activer}><i class="bi bi-person-video2"></i> Emloyee</NavLink>
            </div>
            <div className="for-nav-bottom">
                <NavLink to="/settings" className={activer}><i class="bi bi-gear"></i> Settings</NavLink>
                <span className="my-nav-link"><i class="bi bi-unlock"></i> Lock</span>
            </div>
        </div>
    );
}

export default LeeftSide;