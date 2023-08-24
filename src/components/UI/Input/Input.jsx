import React from 'react';
import cl from './Input.module.scss';

const Input = ({ children, ...props }) => {
    return (
        <input {...props} className={cl.input}>
            {children}
        </input>
    );
};

export default Input;
