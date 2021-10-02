import { MainNavigation } from "./MainNavigation/MainNavigation";
import { Footer } from './Footer/Footer';
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
                <div id={ style.mainContent }>
                    { children }
                </div>
                <Footer />
            </div>
        </main>
    );
}
