import {BrowserRouter, NavLink, Routes, Route, Navigate} from "react-router-dom";
import logo from "../logo.svg"
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : ''} to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={ <h1>About Page</h1>}/>
                    <Route path="users" element={ <h1>Users Page</h1>}/>
                    <Route path="home" element={ <ShoppingPage/> }/>

                    <Route path="/*" element={ <Navigate to="/home" replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}