import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginRoute from "./login/login";
import RegisterRoute from "./register/register";
import ClientsRoute from "./clients/clients";
import ServicesRoute from "./services/services";
import ProductsRoute from "./products/products";
import StockMovementsRoute from "./stock-movements/stock-movements";
import AppointmentsRoute from "./appointments/appointments";

export default function RoutesManager() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginRoute />} />
                <Route path="/login" element={<LoginRoute />} />
                <Route path="/register" element={<RegisterRoute />} />
                <Route path="/clients" element={<ClientsRoute />} />
                <Route path="/services" element={<ServicesRoute />} />
                <Route path="/products" element={<ProductsRoute />} />
                <Route path="/stock-movements/:id" element={<StockMovementsRoute />} />
                <Route path="/appointments" element={<AppointmentsRoute />} />
            </Routes>
        </BrowserRouter>
    )
};
