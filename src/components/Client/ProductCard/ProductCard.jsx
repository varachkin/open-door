import { useSelector } from "react-redux"
import { CardControlPanel } from "../CardControlPanel/CardControlPanel";
import { locales } from "../../../locales";
import { useEffect, useState } from "react";
// import img39 from './../assets/img/imgID/39.png'
// import img40 from './../assets/img/imgID/39.png'
// import img41 from './../assets/img/imgID/39.png'
// import img42 from './../assets/img/imgID/39.png'
// import img43 from './../assets/img/imgID/39.png'
// import img44 from './../assets/img/imgID/39.png'
// import img45 from './../assets/img/imgID/39.png'
// import img46 from './../assets/img/imgID/39.png'
// import img47 from './../assets/img/imgID/39.png'
// import img48 from './../assets/img/imgID/39.png'
// import img49 from './../../../assets/img/imgID/39.png'
// import img50 from './../../../assets/img/imgID/39.png'
// import img51 from './../../../assets/img/imgID/40.png'
// import img52 from 'src/assets/img/imgID/52.png'

export const ProductCard = ({ product, handleOpenModal, box, productPath }) => {
    const { cart } = useSelector(state => state.dataReducer)
    const { language } = useSelector(state => state.actionReducer)
    const [animationShown, setAnimationShown] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        handleOpenModal(e)
    }

    const isExist = cart.find(el => product.product_id == el.product_id)


    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationShown(true);
        }, 0);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`swiper-card-wrapper ${!product?.quantity ? 'disabled' : ''}`} id={product.product_id} onClick={product?.quantity ? handleClick : null}>
            {!product?.quantity && <div className="not-available-label">{locales[language].HOME_PAGE.NOT_AVALIABLE}</div>}
            {isExist && <span className={`card-box-number ${animationShown ? 'exist' : ''}`}> ✔︎</span>}
            <div
                className="swiper-card-img-block"
                // style={{ backgroundImage: `url('/images/${product.product_id}.png')` }}
                 style={{ backgroundImage: `url('https://clickash.s3.us-east-2.amazonaws.com/products/${product.product_id}.webp')` }}
                // style={{ backgroundImage: `url('https://clickash.s3.us-east-2.amazonaws.com/products/${product.product_id}.webp'))`}}
            >

            </div>
            <div className="swiper-card-description-block">
                <div className='swiper-card-name'>{product.title[language]}</div>
                <div className='swiper-card-description'>{product.product_name[language]}</div>
            </div>
            <div className="swiper-card-price-block">
                <div className='swiper-card-price-block'>
                    <div className='current-price'>{product.price_currency} {product?.price?.toFixed(2)}</div>
                    {/* <div className='old-price'>{locales.currency} {product?.fullPrice}</div> */}
                </div>
            </div>
        </div>

    )
}