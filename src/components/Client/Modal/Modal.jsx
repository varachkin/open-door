import {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'
import {IoCloseCircleOutline} from "react-icons/io5";
import {IoMdClose} from "react-icons/io";
import {ModalCardProduct} from '../ModalCardProduct/ModalCardProduct';


export function Modal({handleCloseModal, modalProductID, children}) {
    const MODAL_REF = useRef()

    useEffect(() => {
        const handleOutsideClick = (event) => {
            event.stopPropagation();
            const isClickInsideModal =
                MODAL_REF.current &&
                MODAL_REF.current !== event.target;
            if (!isClickInsideModal) {
                handleCloseModal();
            }
        };
        document
            .getElementById("root-modal")
            .addEventListener("click", handleOutsideClick);

        return () => {
            document
                .getElementById("root-modal")
                .removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return ReactDOM.createPortal(
        <div className="modal-container" ref={MODAL_REF}>
            <div className='modal-content-wrapper'>
                <div className='modal-content'>
                    <span className='btn-modal-close' onClick={handleCloseModal}><IoMdClose/></span>

                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("root-modal")
    )
}