import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import userImg from '../../../assets/user.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li className='font-semibold'><Link className='text-sky-500 bg-slate-300' to='/'>Home</Link></li>
        <li className='font-semibold'><Link className='text-sky-500 bg-slate-300' to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold text-sky-500 bg-slate-300'><Link to='/AddServices'>Add Services</Link></li>
                    <li className='font-semibold text-sky-500 bg-slate-300'><Link to="/myReviews">My Reviews</Link></li>
                    <li className='font-semibold text-sky-500 bg-slate-300'>
                        <button onClick={ handleLogOut } className='btn-ghost'>Sign Out</button>
                    </li>
                    <li><img src={userImg} alt="" /></li>
                </>
                :
                <li className='font-semibold'><Link className='text-sky-500 bg-slate-300' to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <h2 className='font-bold'>Abrar's Photography</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-info">Appointment</button>
            </div>
        </div>
    );
};

export default Header;