import React from "react";
import { useNavigate, Link } from "react-router-dom";
import cl from "./RegStep1.module.scss";
import Button from "../../../../components/UI/Button/Button";
import InputBox from "../../../../components/UI/InputBox/InputBox";

const RegStep1 = () => {
  const navigate = useNavigate();
  return (
    <div className={cl.container}>
      <div className={cl.content}>
        <InputBox label="Ваш Email"></InputBox>
      </div>
      <Link to="/registration/step2">
        <Button theme="commonTheme">Далее</Button>
      </Link>
    </div>
  );
};

export default RegStep1;
