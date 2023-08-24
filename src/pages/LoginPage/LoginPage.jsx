import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import LoginMethodPass from './LoginMethods/LoginMethodPass/LoginMethodPass';
import LoginMethodEDS from './LoginMethods/LoginMethodEDS/LoginMethodEDS';
import LoginMethodTel from './LoginMethods/LoginMethodTel/LoginMethodTel';
import cl from './LoginPage.module.scss';

export const LOGIN_METHODS = {
    PASSWORD: 'Пароль',
    EDS: 'ЭЦП',
    TELEPHONE: 'Телефон',
};

const LoginPage = () => {
    const [loginMethod, selectLoginMethod] = useState(LOGIN_METHODS.PASSWORD);

    return (
        <div className={cl.login}>
            <div className={cl.loginContent}>
                <div className={cl.loginForm}>
                    <p className={cl.title}>Getroad</p>
                    <p className={cl.subTitle}>Транспортный платёжный сервис</p>
                    <p className={cl.methods}>Способы авторизации</p>
                    <ul>
                        {Object.keys(LOGIN_METHODS).map((method) => {
                            return (
                                <li
                                    className={
                                        LOGIN_METHODS[method] === loginMethod
                                            ? cl.active
                                            : ''
                                    }
                                    onClick={() =>
                                        selectLoginMethod(LOGIN_METHODS[method])
                                    }
                                    key={method}>
                                    {LOGIN_METHODS[method]}
                                </li>
                            );
                        })}
                    </ul>
                    <div className={cl.methodContent}>
                        {(() => {
                            switch (loginMethod) {
                                case LOGIN_METHODS.PASSWORD:
                                    return <LoginMethodPass />;
                                case LOGIN_METHODS.EDS:
                                    return <LoginMethodEDS />;
                                case LOGIN_METHODS.TELEPHONE:
                                    return <LoginMethodTel />;
                                default:
                                    return <LoginMethodPass />;
                            }
                        })()}
                    </div>
                </div>
                <div className={cl.underform}>
                    <span>Забыли пароль?</span>
                    <span>
                        <Link to="registration">Регистрация</Link>
                    </span>
                </div>
            </div>
            <div className={cl.loginFooter}>
                <div className={cl.links}>
                    <ul>
                        <li>Оферта</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className={cl.copyright}>
                    <span>GETROAD ®</span>
                    <span>2021—2023</span>
                </div>
                <div className={cl.contactUs}>
                    <span>info@getroad.ru</span>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default LoginPage;
