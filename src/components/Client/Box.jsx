import {useState} from "react";
import { openDoor } from "../../API";
import { useSelector } from "react-redux";

export const Box = ({children, box}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isError, setIsError] = useState(false)
    const {serial} = useSelector(state => state.actionReducer)

    const handleOpen = () => {
        openDoor(box, serial)
        .then(response => {
            if(response.status === 200){
                setIsOpen(true)
                setIsError(false)
            }else{
                setIsError(true)
            }
        })
        .catch(error => {
            setIsError(true)
        })
    }

    return (
        <div className="backDoor">
            <div
                className={`door ${isOpen && !isError? 'doorOpen' : ''} ${isError ? 'doorClosed' : ''}`}
                onClick={handleOpen}
            >
                {children}
            </div>
        </div>

    )
}