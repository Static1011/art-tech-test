import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../../components/UI/Button/Button';
import InputBox from '../../../../components/UI/InputBox/InputBox';
import cl from './RegStep3.module.scss';

const RegStep3 = () => {
    const navigate = useNavigate();

    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <InputBox label="КПП"></InputBox>
            </div>
            <Link to="/">
                <Button theme="commonTheme">Готово</Button>
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

export default RegStep3;
