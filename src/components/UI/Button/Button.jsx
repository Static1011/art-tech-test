import React from 'react';
import cl from './Button.module.scss';

const Button = ({ children, theme, ...props }) => {
    return (
        <button className={[cl.button, cl[theme]].join(' ')} {...props}>
            {children}
        </button>
    );
};

export default Button;
