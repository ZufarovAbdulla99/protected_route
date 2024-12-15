import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoute() {
    const isAuthenticated = useSelector((state) => state.userAuth.isAuthenticated)

    console.log(isAuthenticated)

    return isAuthenticated ? (
        <div className="border border-pink-700">
            <h2>Protected Route</h2>
            <Outlet />
        </div>
    ) : (
        <Navigate to="/login" replace/>
    )
}