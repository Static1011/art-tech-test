import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../../components/UI/Button/Button';
import InputBox from '../../../../components/UI/InputBox/InputBox';
import cl from './RegStep2.module.scss';

const RegStep2 = () => {
    const navigate = useNavigate();

    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <InputBox label="ИНН организации"></InputBox>
            </div>
            <Link to="/registration/step3">
                <Button theme="commonTheme">Далее</Button>
            </Link>
            <span
                className={cl.back}
                onClick={(e) => {
                    navigate(-1);
                }}>
                Назад
            </span>
        </div>
    );
};

export default RegStep2;
