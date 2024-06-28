import { useState } from "react"
import ReactDOM from "react-dom";
import { InputWithKeyboard } from "../InputWithKeyboard/InputWithKeyboard"
import { Button } from "../Button/Button"
import { ButtonSuccess } from "../ButtonSuccess/ButtonSuccess"
import { ButtonCancel } from "../ButtonCancel/ButtonCancel"
import { useDispatch, useSelector } from "react-redux"
import { locales } from "../../../locales"
import { Modal } from "../Modal/Modal";
import { TestKeyboard } from "../TestKeyboard/TestKeyboard";
import { useNavigate } from "react-router-dom";

export const ProductsSettingsComponent = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [currentPosition, setCurrentPosition] = useState(null)
    const { language, configuration } = useSelector(state => state.actionReducer)
    const dispatch = useDispatch()
    const [isCashOn, setIsCashOn] = useState(false)
    const [terminalMode, setTerminalMode] = useState()
    const [grid, setGrid] = useState({columns: 3, rows: 3})
    const navigate = useNavigate()

    const handleBack = () =>{
        navigate(-1)
    }
    const handleCloseModal = ()=> {
        setIsOpenModal(false)
    }

    const handleOpenModal = (event)=> {
        setCurrentPosition(event.target.id)
        setIsOpenModal(true)
    }

    const handleChangeConfigurationMachine = (value)=> {

console.log(value)    }

    const generateCells = () => {
        const cellCount = configuration.columns * configuration.rows;
        const cells = [];

        for (let i = 0; i < cellCount; i++) {
            cells.push(<div key={i} id={i} className="cell" onClick={handleOpenModal}>{i}</div>);
        }

        return cells;
    };

    const gridStyle = {
        display: 'grid',
        padding: '2rem',
        gridTemplateColumns: `repeat(${configuration.columns}, 1fr)`,
        gridTemplateRows: `repeat(${configuration.rows}, 1fr)`,
        gap: '1rem',
        border: '1px solid #222222',
        height: '100%'
    };

    return (
        <div className="products-settings-wrapper">
            <div className="products-settings-content">
                <section>
                    <h2 className="title">CONFIGURATION</h2>
                </section>
                <section className="products-settings-content">
                    <div className="products-settings-grid-control">
                        {/*<label>*/}
                        {/*    Columns:*/}
                        {/*    <InputWithKeyboard id='columns' type="number" typeKeyboard='numbers' getValue={handleChangeConfigurationMachine} defaultValue={configuration.columns}/>*/}
                        {/*</label>*/}
                        {/*<label>*/}
                        {/*    Rows:*/}
                        {/*    <InputWithKeyboard id='rows' type="number" typeKeyboard='numbers' getValue={handleChangeConfigurationMachine} defaultValue={configuration.rows}/>*/}
                        {/*</label>*/}
                        {/*<label>*/}
                        {/*    Deep:*/}
                        {/*    <InputWithKeyboard id='deep' type="number" typeKeyboard='numbers' getValue={handleChangeConfigurationMachine} defaultValue={configuration.rows}/>*/}
                        {/*</label>*/}
                        <TestKeyboard type='number' id='columns' defaultValue={6} getValue={handleChangeConfigurationMachine}/>
                        <TestKeyboard type='number' id='rows' getValue={handleChangeConfigurationMachine}/>
                        <TestKeyboard type='number' id='deep' getValue={handleChangeConfigurationMachine}/>
                    </div>
                    <div className="square-grid" style={gridStyle}>
                        {generateCells()}
                    </div>


                </section>
            </div>
            <section className="button-wrapper">
                <ButtonCancel className="cancel" onClick={handleBack}>{locales[language].BUTTONS.CANCEL}</ButtonCancel>
                <ButtonSuccess className="submit" onClick={()=> console.log('submit')}>{locales[language].BUTTONS.APPROVE.toUpperCase()}</ButtonSuccess>
            </section>
            {isOpenModal && ReactDOM.createPortal(<Modal handleCloseModal={handleCloseModal}>
                    <div>{currentPosition}</div>
            </Modal>, document.getElementById('root-modal'))}
        </div>
    )
}