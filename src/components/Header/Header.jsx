import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

const handleLogOut =() =>{
    logOut()
    .then(()=>{})
    .catch(error =>console.error(error))
}
    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
                </div>
                <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='text-white'> {user.email} <button onClick={handleLogOut}>Log Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;