import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
};

export const dataSlice = createSlice({
    name: 'data',
    initialState: () => initialState,
    reducers: {
        setProducts: (state, actions) => {
            state.products = actions.payload;
        },
        addToCart: (state, actions) => {
            if (state.cart.find(el => el.product_id === actions.payload.product_id)) {
                state.cart = state.cart.map(el => {
                    return el.product_id === actions.payload.product_id ? { ...el, count: el.count + actions.payload.count } : el
                })
            } else {
                state.cart.push(actions.payload)
            }

        },
        removeFromCart: (state, actions) => {
            state.cart = state.cart.filter(product => product.product_id !== actions.payload)
        },
        clearCart: (state) => {
            state.cart = []
        },
        increeseCartProduct: (state, actions) => {
            state.cart = state.cart.map(product => {
                if (product.product_id === actions.payload) {
                    return { ...product, count: product.count + 1 }
                } else {
                    return { ...product }
                }
            })
        },
        decreeseCartProduct: (state, actions) => {
            state.cart = state.cart.map(product => {
                if (product.product_id === actions.payload) {
                    if (product.count > 1) {
                        return { ...product, count: product.count - 1 }
                    } else {
                        return { ...product }
                    }

                } else {
                    return { ...product }
                }
            })
        },


    }
})

export const { setProducts, addToCart, removeFromCart, clearCart, decreeseCartProduct, increeseCartProduct } = dataSlice.actions;
export default dataSlice.reducer;