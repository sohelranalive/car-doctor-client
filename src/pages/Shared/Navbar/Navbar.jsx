import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const menus = <>
        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Services</Link></li>
        <li><Link to='/contact'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li> */}
        {
            user?.email ? <>
                <li><Link to='/bookings'>Bookings</Link></li>
                <li><button className='btn btn-secondary' onClick={handleLogOut}>Log Out</button></li>
            </>
                : <li><Link to='/login'>Login</Link></li>
        }

    </>

    return (
        <div className="navbar bg-base-100 py-10 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li> */}
                        {menus}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li> */}
                    {menus}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;