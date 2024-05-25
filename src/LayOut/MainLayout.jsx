import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderAndFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <div>
            {noHeaderAndFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderAndFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;