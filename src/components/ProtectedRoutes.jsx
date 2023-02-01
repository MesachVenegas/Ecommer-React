import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    let token = localStorage.getItem('token');

    if(token){
        return <Outlet />
    }else {
        return <Navigate to={'/loggin'}/>
    }
}

export default ProtectedRoutes;