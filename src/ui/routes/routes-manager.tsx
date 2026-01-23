import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginRoute from "./login/login";

export default function RoutesManager() {
    return (
        <BrowserRouter>
            <Routes>
                {/* User routes */}
                <Route path="/login" element={<LoginRoute />} />
            </Routes>
        </BrowserRouter>
    )
};
