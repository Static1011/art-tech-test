import React from 'react';
import Input from '../Input/Input';
import cl from './InputBox.module.scss';

const InputBox = ({ children, label }) => {
    return (
        <div className={cl.inputBox}>
            <label>{label}</label>
            <Input>{children}</Input>
        </div>
    );
};

export default InputBox;
