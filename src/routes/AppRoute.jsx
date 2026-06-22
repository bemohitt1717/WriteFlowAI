import { Route, Routes } from "react-router-dom"
import DashboardPage from "../Pages/DashboardPage"
import HomePage from "../Pages/HomePage"


export const AppRoute = () => {
    return <Routes>
            <Route path="/" element = {<HomePage/>}></Route>
            <Route path="/dashboard" element = {<DashboardPage/>}></Route>
    </Routes>
}