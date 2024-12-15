import { Outlet } from "react-router-dom"

export default function ProtectedRoute() {

    return (
        <div>
            <h2>Protected Route</h2>
            <Outlet />
        </div>
    )
}