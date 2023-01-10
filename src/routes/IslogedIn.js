import Cookies from "js-cookie"
import { Outlet, Navigate } from "react-router-dom"

export const IsLogedIn = () => {
    // const userInfoData = Cookies.get("userInfo") || null
    // const parseUser = JSON.parse(userInfoData)
    
    return (
        false ? <Navigate to='/' /> : <Outlet />
    )
}