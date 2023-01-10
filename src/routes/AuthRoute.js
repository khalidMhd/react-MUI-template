import Cookies from "js-cookie"
import { Outlet, Navigate } from "react-router-dom"

export const AuthRoutes = () => {
    const userInfoData = Cookies.get("userInfo") || null
    const parseUser = JSON.parse(userInfoData)
    return (
        true ? <Outlet /> : <Navigate to="/login" />
    )
}