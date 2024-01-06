import { Heading } from "../../components/Typography/Heading/Heading";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { LinkButton } from "../../components/UI/LinkButton/LinkButton";
import { LoginStyle } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <LoginStyle>
      <Heading headingType='h1' headingText="Авторизация"/>
      <form action="#">
        <AppInput type="tel" hasError={false} errorText="Ошибка" required placeholder="Номер телефона"/>
        <AppInput type="password" hasError={false} errorText="Ошибка" required placeholder="Пароль" />
        <LinkButton path="/main-page" buttonLabel="Войти"/>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo />
    </LoginStyle>
  );
};
