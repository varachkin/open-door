import { DevPanel } from "../../Service/DevPanel/DevPanel";
import Page from "../Page/Page";
import { SecretDevelopmentMode } from "../SecretDevelopmentMode/SecretDevelopmentMode";
import { useSelector } from "react-redux";
export default function Main({children}) {

    const {devMode} = useSelector(state => state.actionReducer)

    return (
        <Page>
            {devMode && <DevPanel />}
             <SecretDevelopmentMode />
            {children}
        </Page>
    )
}