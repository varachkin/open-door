import { useState } from "react"
import { InputWithKeyboard } from "../InputWithKeyboard/InputWithKeyboard"
import { Button } from "../Button/Button"
import { ButtonSuccess } from "../ButtonSuccess/ButtonSuccess"
import { ButtonCancel } from "../ButtonCancel/ButtonCancel"
import { useSelector } from "react-redux"
import { locales } from "../../../locales"
import { useNavigate } from "react-router-dom"

export const TerminalSettingsComponent = () => {
    const [isCashOn, setIsCashOn] = useState(false)
    const [terminalMode, setTerminalMode] = useState()
    const navigate = useNavigate()

    const handleBack = () =>{
        navigate(-1)
    }

    const {language} = useSelector(state => state.actionReducer)
    const handleChangeCashPayment = () => {
        setIsCashOn(prev => !prev)
    }
    return (
        <div className="terminal-settings-wrapper">
            <section>
                <h2 className="title">Cash settings</h2>
                <div
                    className="swich-wrapper"
                >

                    <span className={`${isCashOn ? '' : 'active-off'}`}>OFF</span>
                    <input type="checkbox" id="switch" onChange={handleChangeCashPayment} checked={isCashOn} /><label htmlFor="switch">Toggle</label>
                    <span className="active-on">ON</span>

                </div>
            </section>

            <section>
                <h2 className="title">Terminal settings</h2>
                <div className="radio-wrapper">
                    <label className="terminal-settings-radio"><input type="radio" name='terminal-setting' />MDB 3</label>
                    <label className="terminal-settings-radio"><input type="radio" name='terminal-setting' />EService</label>
                    <label className="terminal-settings-radio"><input type="radio" name='terminal-setting' />UDP PEP </label>
                </div>
                <div className="title">
                    <InputWithKeyboard typeKeyboard='numbers' />
                </div>
            </section>
            <section className="button-wrapper">
                <ButtonCancel className="cancel" onClick={handleBack}>{locales[language].BUTTONS.CANCEL}</ButtonCancel>
                <ButtonSuccess className="submit">{locales[language].BUTTONS.APPROVE.toUpperCase()}</ButtonSuccess>
            </section>
        </div>
    )
}