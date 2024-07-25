import "../Styles/NavigationBar.css"
import { Link } from "react-router-dom"
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react";


export default function NavigationBar({children}){

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "src/Scripts/NavigationBar.js";
        script.async = true;
        script.onload = () => {
          console.log('Script loaded!');
          // Initialize or call any function from the script if needed
        };
        script.onerror = () => {
          console.error('Script failed to load.');
        };
    
        document.body.appendChild(script);
    
        return () => {
          // Cleanup: remove the script when the component unmounts
          document.body.removeChild(script);
        };
      }, []);

      const navigate = useNavigate()

      const logout = ()=>{
        localStorage.removeItem('authTokens')
        navigate('/login')
      }

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
                            <li onClick={logout}><Link>Logout</Link></li>
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