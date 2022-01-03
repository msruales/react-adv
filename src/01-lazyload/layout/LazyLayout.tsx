import {Routes, Route, Navigate, NavLink} from "react-router-dom";
import {LazyPage1, LazyPage3, LazyPage2 } from "../pages";

const LazyLayout = () => {
    return (
        <div>
            <h1>Lazy Layout</h1>

            <ul>
                <li>
                    <NavLink to="lazy1">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3">Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={ <LazyPage1 /> } />
                <Route path="lazy2" element={ <LazyPage2 /> } />
                <Route path="lazy3" element={ <LazyPage3 /> } />

                <Route path="*" element={ <Navigate to="lazy1" />} />
            </Routes>
        </div>
    )
}

export default LazyLayout