import './../../assets/css/box.scss'

export const Box = () => {
    return (
        <div className="cube purple">
            <div className="cube__inner">
                <div className="cube__side front"></div>
                <div className="cube__side back"></div>
                <div className="cube__side top"></div>
                <div className="cube__side bottom"></div>
                <div className="cube__side left"></div>
                <div className="cube__side right"></div>
            </div>
        </div>
    )
}