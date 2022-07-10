import React from 'react';
import { Link } from 'react-router-dom';
import Orderlist from '../admin/Orderlist/Orderlist'
import Productslist from '../admin/ProductUser/Productslist'
import Userlist from '../admin/Userlist/Userlist';


function NavDrop() {
    const style = {
        textDecoration: "none",
        fontSize: "16px",
        color: "#000",
        fontWeight: "600"
    }
return (
    <div>
        <div className="dropdown">
            <ul className="nan btn btn-default dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false" style={style}>
                Admin
            </ul>
            <li className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <Link to="/Admin/Orderlist" className="dropdown-item nan" >ORDERS</Link>
                <Link to="/Admin/Productslist" className="dropdown-item nan" >PRODUCTS</Link>
                <Link to="/Admin/Userlist" className="dropdown-item nan" >USER</Link>
            </li>
        </div>
    </div>
)
}

export default NavDrop
                                                                                                                                     