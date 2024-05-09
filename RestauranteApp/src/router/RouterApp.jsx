import { Routes } from "react-router-dom"
import { HomePages } from "../Pages/HomePages.jsx"
import { Reservas } from "../Pages/Reservas.jsx"


export const RouterApp = () => {
    return (
        <>
            <Routes>
                < Route path="/" element={<HomePages/>} />  {/* Home Page */}
                < Route path="/reservas" element={<Reservas/>} />    {/* direcionamiento a otra pagina */}
            </Routes>
        </>
    )
}