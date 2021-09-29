import { NavLink } from "react-router-dom";

import style from './MainNavigation.module.scss';

export const MainNavigation = () => {
    return (
        <nav>
            <ul id={ style.mainNavigation }>
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
    );
}