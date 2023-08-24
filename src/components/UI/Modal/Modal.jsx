import React from 'react';
import cl from './Modal.module.scss';

const Modal = ({ children }) => {
    return (
        <div className={cl.modalContainer}>
            <div className={cl.modal}>{children}</div>
        </div>
    );
};

export default Modal;
