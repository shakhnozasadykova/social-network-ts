import { Heading } from "../../components/Typography/Heading/Heading"; 
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton"; 
import { RegistrationStyle } from "./RegistrationPage.style";

export const RegistrationPage = () => {
    return (
      <RegistrationStyle>
         <div className="RegistrationPage">
          <Heading headingType='h1' headingText="Регистрация"/>
          <form action="#">
            <AppInput type="text" hasError={false} errorText="Ошибка" required placeholder="Имя и фамилия"/>
            <AppInput type="tel" hasError={false} errorText="Ошибка" required placeholder="Номер телефона"/>
            <AppInput type="password" hasError={false} errorText="Ошибка" required placeholder="Пароль" />

            <AppButton type="button" disabled={false} buttonLabel="Зарегистрироваться"/>
          </form>
          <a href="#">Забыли пароль?</a>
          <RegistrationInfo />
        </div>
      </RegistrationStyle>
      );
}