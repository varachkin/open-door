import { useLocation } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";

export default function Page({ children }) {
    const {pathname} = useLocation();
    return (
        <main className="page">
            
            <main className="main">
            {!pathname.includes('service') &&<Header />}
                {children}
            </main>
            {!(pathname.includes('service') || pathname === '/' || pathname === '/login' || pathname === '/settings' || pathname === '/cart' ) && <Footer />}
        </main>
    )
}