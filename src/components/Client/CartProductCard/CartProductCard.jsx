import { useDispatch, useSelector } from "react-redux"
import { CardControlPanel } from "../CardControlPanel/CardControlPanel"
import { locales } from "../../../locales"

export const CartProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const { language } = useSelector(state => state.actionReducer)

    return (
        <div className="cart-card-wrapper">
            <div
                className="cart-product-img-block"
                style={{ backgroundImage: `url('https://clickash.s3.us-east-2.amazonaws.com/products/${product.product_id}.webp')` }}
            >
            </div>
            <div className="cart-card-description-block">
                <div className='cart-card-subtitle'>{product.product_name[language]}</div>
                <div className='cart-card-title'>{product.title[language]}</div>
                <div className="card-control-block">
                    <div className='cart-card-price-block'>
                        <div className='current-price'>{locales.currency} {product?.price?.toFixed(2)}</div>
                        {/* <div className='old-price'>{locales.currency} {product.fullPrice}</div> */}
                    </div>
                    <CardControlPanel product={product} mode='cart' max={product.quantity}/>
                </div>
            </div>
        </div>

    )
}