import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreeseCartProduct, increeseCartProduct, removeFromCart } from "../../../features/data/dataSlice";
import { TbTrashXFilled } from "react-icons/tb";

export const CardControlPanel = ({ handleCloseModal, product, mode }) => {
    const [counter, setCounter] = useState(1)
    const [isDisableBtn, setIsDisableBtn] = useState(false)
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.dataReducer)


    const cartProductCount = cart.find(item => item.product_id === product.product_id)?.count || 0

    const maxCount = mode === 'cart' ?
        product.quantity :
        product.quantity - cartProductCount

    console.log(maxCount)
    console.log(product)
    const handleIncrees = (event) => {
        event.stopPropagation();
        if (counter < maxCount) {
            setCounter(prev => prev + 1)
        }

    }

    const handleDecrees = (event) => {
        event.stopPropagation();
        if (counter > 1) {
            setCounter(prev => prev - 1)
        }
    }


    const handleIncreeseCart = () => {
        if (counter < product.quantity) {
            dispatch(increeseCartProduct(product.product_id))
        }
    }

    const handleDecreeseCart = () => {
        dispatch(decreeseCartProduct(product.product_id))
    }



    const hahdleRemoveFromCard = (event) => {
        event.stopPropagation()
        dispatch(removeFromCart(product.product_id))
    }

    const handleAddToCart = (event) => {
        event.stopPropagation();
        dispatch(addToCart({ count: counter, product_id: product.product_id, product }))
        setCounter(1)
        if (handleCloseModal) {
            handleCloseModal()
        }
    }
    useEffect(() => {
        const prod = cart.find(el => el.product_id == product.product_id)
        if (mode === 'cart') {
            setCounter(prod.count)
        }
        if (!maxCount) {
            setIsDisableBtn(true);
        }

    }, [cart])

    return (
        <div className="card-control-panel-wrapper">
            <div className="card-control-panel">
                <span onClick={mode === 'cart' ? handleDecreeseCart : handleDecrees}>
                    {(!(counter <= 1)) && <AiOutlineMinus />}
                </span>

                <div>{isDisableBtn ? 0 : counter}</div>
                <span onClick={mode === 'cart' ? handleIncreeseCart : handleIncrees}>
                    {(counter < maxCount) && <AiOutlinePlus />}
                </span>
            </div>
            {mode === 'cart' ? <Button variant='remove' onClick={hahdleRemoveFromCard}><TbTrashXFilled /></Button> : <Button onClick={!isDisableBtn ? handleAddToCart : null} disabled={isDisableBtn}><FaCartArrowDown /></Button>}
        </div>

    )
}