import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useServiceLoginUpdate} from "./../../contexts/ServiceLoginContext";
import useTimeout from "./../../hooks/useTimeout";
import {useLoginUpdate} from "./../../contexts/LoginContext";
import {useDispatch, useSelector} from "react-redux";
import {PiHandTapFill} from "react-icons/pi";
import {locales} from "../../locales";
import {setCheckingTechnicalBreak, setSerialOfMachine, setTechBreak} from "../../features/actions/actionsSlice";
import useSnack from "../../hooks/useSnack";
import Loader from '../../components/Client/Loader/Loader';
import useLoaderSizeByWidth from '../../hooks/useLoaderSizeByWidth'
import {Box} from "../../components/Client/Box";

export default function StartPage() {
    const loaderSize = useLoaderSizeByWidth();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const showAlert = useSnack()
    const changeLogin = useLoginUpdate();
    const changeServiceLogin = useServiceLoginUpdate();
    const {language, isCheckingTechBreak, serial} = useSelector(state => state.actionReducer)
    const [intervalTechBreakID, setIntervalTechBreakID] = useState(null)

    useEffect(() => {

    }, [])
    const boxes = [1,2,3,4,5,6,7,8]
    return (
        <div className="start-page-wrapper">
            <div
                className="start-page-container"
            >
                <div className="start-page-logo"></div>
                <div className='box-wrapper'>
                    {boxes.map(box => <Box key={box} box={box}>{box}</Box>)}
                </div>

                <div className="title">{locales[language].START_PAGE.TITLE}</div>
            </div>
        </div>)
}
