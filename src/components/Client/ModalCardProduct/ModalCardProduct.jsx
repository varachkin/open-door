import { useSelector } from 'react-redux'
import { CardControlPanel } from '../CardControlPanel/CardControlPanel';
import { locales } from '../../../locales';

export const ModalCardProduct = ({ modalProductID, handleCloseModal }) => {
    const { products } = useSelector(state => state.dataReducer);
    const { language } = useSelector(state => state.actionReducer)

    const product = products.find(el => el.product_id == modalProductID)
    const onSale = false;
    console.log(product)
    return (
        <div className="modal-card-wrapper">
            {onSale && <div className='sale'></div>}
            <div className="modal-card-img-block"
               style={{ backgroundImage: `url('https://clickash.s3.us-east-2.amazonaws.com/products/${product.product_id}.webp')` }}
            >
            </div>
            <div className='modal-card-title'>{product.product_name[language]}</div>
            <div className='modal-card-subtitle'>{product.title[language]}</div>
            <div className="modal-card-description-block">
                {/* <div className='modal-card-name'>{product.title}</div> */}

                <div className="modal-card-description-wrapper">
                    <div className='modal-card-description'>{product.description[language]}</div>
                    {/* <div className='modal-card-description-nutritional'>
                        <div className='nutritional-section'>
                            <div style={{ fontWeight: 800, textAlign: 'center' }}>Nährwetangaben</div>
                            <div style={{ fontWeight: 800, textAlign: 'center' }}>{product?.nutritional?.title}</div>
                        </div>
                        <div className='nutritional-section'>
                            <div>Brennwert KJ</div>
                            <div>{product?.nutritional.energy_KJ}</div>
                        </div>
                        <div className='nutritional-section'>
                            <div>Brennwert Kcal</div>
                            <div>{product?.nutritional.energy_Kcal}</div>
                        </div>
                        <div className='nutritional-section'>
                            <div>Fett</div>
                            <div>{product?.nutritional.fat}</div>
                        </div>
                        <div className='nutritional-section'>
                            <div>Davon gesättigte Fettsäuren</div>
                            <div>{product?.nutritional.fat_accids}</div>
                        </div>

                        <div className='nutritional-section'>
                            <div>Kohlenhydrate gesamt</div>
                            <div>{product?.nutritional.carbohydrates}</div>
                        </div>
                        <div className='nutritional-section'>
                            <div>Davon Zucker</div>
                            <div>{product?.nutritional.sugar_carbohydrates}</div>
                        </div>
                        <div className='nutritional-section'>
                            <div>Eiweiß</div>
                            <div>{product?.nutritional.protein}</div>
                        </div>
                        <div className='nutritional-section'>
                            <div>Salz</div>
                            <div>{product?.nutritional.salt}</div>
                        </div>
                    </div> */}
                </div>

            </div>
            <div className="modal-card-control-block">
                <div className='modal-card-price-block'>
                    <div className='current-price'>{locales.currency} {product?.price?.toFixed(2)}</div>
                    {/* <div className='old-price'>{locales.currency} {product.fullPrice}</div> */}
                </div>
                <CardControlPanel handleCloseModal={handleCloseModal} product={product} />
            </div>


        </div>

    )
}