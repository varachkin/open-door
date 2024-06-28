import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dataReducer from '../features/data/dataSlice'
import actionReducer from '../features/actions/actionsSlice'

const rootReducer = combineReducers({
    actionReducer, dataReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}


