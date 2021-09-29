import { NavLink } from "react-router-dom";

import style from './Sidebar.module.scss';

export const Sidebar = () => {
    return (
        <aside id={ style.sidebar }>
            <header>
                <h2>Dashboard</h2>
            </header>
            <nav>
                <ul id={ style.sidebarNavigation }>
                    <li>
                        <NavLink exact activeClassName={ style.active } to="/account">Account</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName={ style.active } to="/insights">Insights</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName={ style.active } to="/followers">Followers</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName={ style.active } to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}