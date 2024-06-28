import { useDispatch } from "react-redux"
import { clearCart } from "../../../features/data/dataSlice";
import { IoArrowUndo } from "react-icons/io5";

export const ButtonToStart = ({handleNavigateToStart}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if(handleNavigateToStart){
            handleNavigateToStart();
        }
        
        dispatch(clearCart())
    }
    return (
        <button className="header-return-btn" onClick={handleClick}>
            <IoArrowUndo />
            <span className="btn-text">TO START</span>
        </button>
    )
}