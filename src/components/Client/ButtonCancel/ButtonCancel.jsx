import { FaCircleXmark } from "react-icons/fa6";

export const ButtonCancel = ({children, onClick, variant, disabled, className = ''})=> {
   
    return(
        <button disabled={disabled} className={`button ${className} ${variant && variant === 'secondary' ? 'light' : variant === 'remove' ? 'warning' : disabled ? 'disabled' : ''}`} onClick={onClick}><FaCircleXmark /> {children} </button>
    )
}