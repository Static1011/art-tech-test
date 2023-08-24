import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import cl from './RegForm.module.scss';

const RegForm = () => {
    const location = useLocation().pathname;

    if (location === '/registration')
        return <Navigate to="/registration/step1" />;

    return (
        <div className={cl.regForm}>
            <span className={cl.line}></span>
            <p className={cl.title}>Регистрация</p>
            <Outlet />
        </div>
    );
};

export default RegForm;
