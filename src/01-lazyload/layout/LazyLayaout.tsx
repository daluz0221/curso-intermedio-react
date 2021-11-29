import { Navigate, NavLink, Route, Routes } from "react-router-dom"



export const LazyLayaout = () => {
    return (
        <div>
            <h1>LazyLayaout Page</h1>

            <ul>
                <li>
                    <NavLink to="home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
                <li>
                    <NavLink to="users">Users</NavLink>
                </li>
            </ul>


            <Routes>
                <Route path="lazy-1" element={ <div>Home</div> } />
                <Route path="lazy-2" element={ <div>About</div> } />
                <Route path="lazy-3" element={ <div>Users</div> } />

                {/* <Route path="*" element={<div>Not Found</div>} /> */}
                <Route path="*" element={<Navigate replace to="lazy-1" />} />
            </Routes>
        </div>
    )
}

export default LazyLayaout