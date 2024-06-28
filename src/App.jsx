import AppRouter from "./AppRouter";
import { LangProvider } from "./contexts/LangContext";
import { LoginProvider } from "./contexts/LoginContext";
import { ServiceLoginProvider } from "./contexts/ServiceLoginContext";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { SnackbarProvider } from 'notistack';
export default function App(props) {
    const store = setupStore()

    return (
        <>
            <Provider store={store}>
                <LangProvider>
                    <LoginProvider>
                        <ServiceLoginProvider>
                            <SnackbarProvider maxSnack={7}>
                                <AppRouter {...props} />
                            </SnackbarProvider>
                        </ServiceLoginProvider>
                    </LoginProvider>
                </LangProvider>
            </Provider>
        </>
    );
}