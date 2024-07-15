import "../Styles/NavigationBar.css"
import "../Scripts/NavigationBar.js"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function NavigationBar({children}){
    return (
        <div>
            <nav>
                <div className="nav-bar">
                    <i className='bx bx-menu sidebarOpen' ></i>
                    <span className="logo navLogo"><a href="#">Noter</a></span>
                    <div className="menu">
                        <div className="logo-toggle">
                            <span className="logo"><a href="#">Noter</a></span>
                            <i className='bx bx-x siderbarClose'></i>
                        </div>
                        <ul className="nav-links">
                            <li><Link to="/">My Notes</Link></li>
                            <li><Link to="/createnote">Create Note</Link></li>
                            <li><Link to="/login">Logout</Link></li>
                        </ul>
                    </div>
                    <div className="darkLight-searchBox">
                        <div className="dark-light">
                            <i className='bx bx-moon moon'></i>
                            <i className='bx bx-sun sun'></i>
                        </div>
                        <div className="searchBox">
                        <div className="searchToggle">
                            <i className='bx bx-x cancel'></i>
                            <i className='bx bx-search search'></i>
                        </div>
                            <div className="search-field">
                                <input type="text" placeholder="Search..." />
                                <i className='bx bx-search'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
            
        </div>
    )
}