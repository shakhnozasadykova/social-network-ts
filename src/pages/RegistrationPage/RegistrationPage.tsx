import React from "react";
import "./RegistrationPage.scss";
import { Heading } from "../../components/Typography/Heading/Heading"; 
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton"; 

export const RegistrationPage = () => {
    return (
        <div className="LoginPage">
          <Heading headingType='h1' headingText="Авторизация"/>
          <form action="#">
            <AppInput type="text" hasError={false} errorText="Ошибка" required placeholder="Имя и фамилия"/>
            <AppInput type="email" hasError={false} errorText="Ошибка" required placeholder="Почта"/>
            <AppInput type="tel" hasError={false} errorText="Ошибка" required placeholder="Номер телефона"/>
            <AppInput type="password" hasError={false} errorText="Ошибка" required placeholder="Пароль" />
            <AppInput type="text" hasError={false} errorText="Ошибка" required placeholder="Город"/>
            <AppButton type="button" disabled={false} buttonLabel="Зарегистрироваться"/>
          </form>
          <a href="#">Забыли пароль?</a>
          <RegistrationInfo />
        </div>
      );
}