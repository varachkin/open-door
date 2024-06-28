import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeDevMode } from "../../../features/actions/actionsSlice";

export const SecretDevelopmentMode = ()=> {
    const devModeRef = useRef()
    const [clickCount, setClickCount] = useState(0);
    const {devMode} = useSelector(state => state.actionReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        const handleClick = (event) => {
            event.stopPropagation()
            setClickCount((prevCount) => prevCount + 1);

            // Reset click count after 1 second
            setTimeout(() => {
                setClickCount(0);
            }, 1000);
        };

        devModeRef?.current.addEventListener('click', handleClick);

        return () => {
            devModeRef?.current?.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {
        if (clickCount === 3) {
            dispatch(changeDevMode())
        }

    }, [clickCount]);
    return(
        <span className={`secret-btn-dev ${devMode ? 'active-label' : ''}`} ref={devModeRef}>
            {devMode && <span>DEV MODE ENABLED</span>}
        </span>
    )
}