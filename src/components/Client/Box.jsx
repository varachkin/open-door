import {useState} from "react";

export const Box = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className="backDoor">
            <div
                className={`door ${isOpen ? 'doorOpen' : ''}`}
                onClick={handleOpen}
            >
                {children}
            </div>
        </div>

    )
}