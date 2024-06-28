export default function Logo({handleNavigateToStart, variant}) {
    return (
        <div className={`header-logo-block`}  onClick={handleNavigateToStart}>
            <div className={`header-logo  ${variant === 'black' ? 'black' : ''}`}></div>
        </div>
    )
}