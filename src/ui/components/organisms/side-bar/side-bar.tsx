import { NavLink } from "react-router-dom";
import UserWithIcon from "../../atoms/user-with-icon/user-with-icon";
import style from "./style.module.css";

export default function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <div className={style.userSection}>
                <UserWithIcon userName="Admin" />
            </div>

            <nav className={style.menu}>
                <NavLink
                to="/appointments"
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : style.link
                }
                >
                    Turnos
                </NavLink>

                <NavLink
                to="/clients"
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : style.link
                }
                >
                    Clientes
                </NavLink>

                <NavLink
                to="/services"
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : style.link
                }
                >
                    Servicios
                </NavLink>

                <NavLink
                to="/products"
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : style.link
                }
                >
                    Productos
                </NavLink>

                <NavLink
                to="/reports"
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : style.link
                }
                >
                    Reportes
                </NavLink>
            </nav>
        </aside>
    );
}
