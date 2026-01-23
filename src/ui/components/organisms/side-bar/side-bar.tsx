import { NavLink } from "react-router-dom";
import style from "./sidebar.module.css";

export default function Sidebar() {
  return (
        <aside className={style.sidebar}>
            <nav className={style.menu}>
                <NavLink to="/dashboard" className={style.link}>
                    Dashboard
                </NavLink>

                <NavLink to="/clients" className={style.link}>
                    Clientes
                </NavLink>

                <NavLink to="/services" className={style.link}>
                    Servicios
                </NavLink>

                <NavLink to="/products" className={style.link}>
                    Productos
                </NavLink>
            </nav>
        </aside>
  );
}
