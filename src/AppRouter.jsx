import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Client/Main/Main";
import StartPage from "./pages/StartPage/StartPage";

export default function AppRouter(props) {

    return (

        <BrowserRouter>
            <Main>
                <Routes>
                    <Route path="/" element={<StartPage {...props} />} />
                </Routes>
            </Main>
        </BrowserRouter>

    );
}
