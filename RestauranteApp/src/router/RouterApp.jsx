import { Route, Routes } from "react-router-dom"
import { HomePages } from "../Pages/HomePages.jsx"
import { Reservas } from "../Pages/Reservas.jsx"
import { CartaPage } from "../Pages/CartaPage.jsx"
import { NotFound } from "../Pages/NotFound.jsx"


export const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePages/>} /> 
                <Route path="/reservas" element={<Reservas/>} />    
                <Route path="/carta" element={<CartaPage/>} />   
                <Route path="*" element={<NotFound/>} />  

            </Routes>
        </>
    )
}