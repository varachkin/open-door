import { useSelector } from "react-redux"
import { locales } from "../../../locales"

export const ListStatusProducts = ({ fault_release = [], success_release = [] }) => {
    const { language } = useSelector(state => state.actionReducer)
    console.log(fault_release, success_release)
    return (
        <>
            {!!success_release?.length && <div className="succes-products-list products-list">
                <h4>{locales[language].SERVICE_PAGE.SUCCESS.toUpperCase()}:</h4>
                {/*{success_release.map(el => (*/}
                {success_release.map((item, index) => (
                    <div className="status-product-list-row" key={item.product_id}>
                        <div className="o-circle c-container__circle o-circle__sign--success">
                            ✔︎
                        </div>
                        <div className='status-product-list-value'>
                            <span style={{ animationDelay: index + 0.5 + 's' }}>
                                {item?.product?.product_name[language]}
                            </span>
                            <span>
                                {item?.count}{locales[language].SERVICE_PAGE.LABEL_PCS}
                            </span>
                        </div>
                    </div>
                )
                )}
            </div>}
            {!!fault_release?.length && <div className="fail-products-list products-list">
                <h4>{locales[language].SERVICE_PAGE.ERROR.toUpperCase()}:</h4>
                {/*{fault_release.map(el => (*/}
                {fault_release.map((item, index) => (
                    <div className="status-product-list-row" key={item.product_id}>
                        <div className="o-circle c-container__circle o-circle__sign--failure">
                            ✘
                        </div>
                        <div className='status-product-list-value'>
                            <span style={{ animationDelay: index + 0.5 + 's' }}>
                                {item?.product?.product_name[language]}
                            </span>
                            <span>
                                {item?.count}{locales[language].SERVICE_PAGE.LABEL_PCS}
                            </span>
                        </div>

                    </div>
                )
                )}
            </div>}
        </>
    )
}