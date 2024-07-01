import {useState} from "react";

export const Box = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleOpen = () => {
        const random = Math.round(Math.random())
        if(random){
            setIsOpen(prev => !prev)
        }else if(!isOpen){
            setIsError(true)
        }else{
            setIsError(false)
        }
        
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