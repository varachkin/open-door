import { FaCircleCheck } from "react-icons/fa6";

export const ButtonSuccess = ({children, onClick, variant, disabled, className = ''})=> {
    return(
        <button disabled={disabled} className={`button ${className} ${variant && variant === 'secondary' ? 'light' : variant === 'remove' ? 'warning' : disabled ? 'disabled' : ''}`} onClick={onClick}>{children} <FaCircleCheck /></button>
    )
}