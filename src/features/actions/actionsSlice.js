import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    language: 'pl',
    // serial: null,
    serial: 'CLK01-999-99-98',
    isCheckingTechBreak: false,
    technical_break: false,
    devMode: false,
    configuration: { columns: 3, rows: 3, deep: 10 }
}
export const actionsSlice = createSlice({
    name: 'actions',
    initialState: () => initialState,
    reducers: {
        changeLanguage: (state, actions) => {
            state.language = actions.payload
        },
        setSerialOfMachine: (state, actions) => {
            state.serial = actions.payload
        },
        changeDevMode: (state) => {
            state.devMode = !state.devMode
        },
        setTechBreak: (state, actions) => {
            state.technical_break = actions.payload
        },
        setCheckingTechnicalBreak: (state, actions) => {
            state.isCheckingTechBreak = actions.payload
        }
    }
})

export const { changeLanguage, setSerialOfMachine, changeDevMode, setTechBreak, setCheckingTechnicalBreak } = actionsSlice.actions;
export default actionsSlice.reducer;