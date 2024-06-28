export const Button = ({children, onClick, variant, disabled, className = ''})=> {
    return(
        <button disabled={disabled} className={`button ${className} ${disabled ? 'disabled' : ''} ${variant && variant === 'secondary' ? 'light' : variant === 'remove' ? 'warning' : disabled ? 'disabled' : ''}`} onClick={onClick}>{children}</button>
    )
}