import { useLocation } from 'react-router-dom'
import Icon from '../../../assets/img/cart.png'
export const CartIcon = ({ onClick, cart }) => {
    const { pathname } = useLocation();
    return (

        <div className="cart-icon-wrapper" onClick={pathname === '/cart' || !cart.length ? null : onClick}>
            <div className='cart'></div>
            {cart.length > 0 && <div className='circle'>
                {cart?.reduce((acc, el) => acc + el.count, 0)}
            </div>}
        </div>
    )
}