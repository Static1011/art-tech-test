import React from 'react';
import InputBox from '../../../../components/UI/InputBox/InputBox';
import Button from '../../../../components/UI/Button/Button';

import cl from './LoginMethodPass.module.scss';

const LoginMethodPass = () => {
    return (
        <div className={cl.container}>
            <div>
                <InputBox label="Логин"></InputBox>
                <InputBox label="Пароль"></InputBox>
            </div>
            <div>
                <Button theme="commonTheme">Войти</Button>
            </div>
        </div>
    );
};

export default LoginMethodPass;
