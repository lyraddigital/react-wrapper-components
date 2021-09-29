import {
    Footer,
    MainNavigation,
    Sidebar
} from "components/Layout";
import { BannerIcon } from "components/Icons";

import style from './Layout.module.scss';

export const Layout = ({ children }) => {
    return (
        <main id={ style.layout }>
            <header>
                <BannerIcon />
                <MainNavigation />
            </header>
            <div id={ style.pageContent }>
                <Sidebar />
                <div id={ style.mainContent }>
                    { children }
                </div>
                <Footer />
            </div>
        </main>
    );
}
