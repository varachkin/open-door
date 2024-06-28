import { useNavigate } from 'react-router-dom'
import { CartIcon } from '../CartIcon/CartIcon'
import { useDispatch, useSelector } from 'react-redux'
import { TbHomeDown } from "react-icons/tb";
import { clearCart } from '../../../features/data/dataSlice';
import { locales } from '../../../locales';

export const Footer = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {language} = useSelector(state => state.actionReducer)
    const {cart} = useSelector(state => state.dataReducer)

    const handleNavigateToCart = ()=> {
        navigate('/cart')
    }
    const handleNavigateToHome = ()=> {
        dispatch(clearCart())
        navigate('/')
    }

    return (
        <footer className="footer">
            {/* <div className='footer-home-btn-wrapper'>
                <div className='footer-home-btn' onClick={handleNavigateToHome}>
                    <TbHomeDown/>
                </div>
            </div> */}
            <div className='footer-info-block'>
                {!!cart?.length && <div className='footer-info-block-row'>
                    <div>{locales[language].FOOTER.TOTAL}</div>
                    <div>{locales.currency} {cart.reduce((acc, el) => acc + el.count * el.product.price, 0).toFixed(2)}</div>
                </div>}
            </div>
            <div className='footer-cart-block'>
                <CartIcon onClick={handleNavigateToCart} cart={cart}/>
            </div>
        </footer>
    )
}