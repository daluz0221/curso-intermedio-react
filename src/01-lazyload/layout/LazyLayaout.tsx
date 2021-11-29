import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import LazyPage1 from "../pages/LazyPage1"
import LazyPage2 from '../pages/LazyPage2';
import LazyPage3 from '../pages/LazyPage3';


export const LazyLayaout = () => {
    return (
        <div>
            <h1>LazyLayaout Page</h1>

            <ul>
                <li>
                    <NavLink to="lazy-1">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy-2">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy-3">Lazy 3</NavLink>
                </li>
            </ul>


            <Routes>
                <Route path="lazy-1" element={<LazyPage1 />} />
                <Route path="lazy-2" element={<LazyPage2 />} />
                <Route path="lazy-3" element={<LazyPage3 />} />

                {/* <Route path="*" element={<div>Not Found</div>} /> */}
                <Route path="*" element={<Navigate replace to="lazy-1" />} />
            </Routes>
        </div>
    )
}

export default LazyLayaout