import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Heading } from "../../components/Typography/Heading/Heading";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { RegistrationStyle } from "./RegistrationPage.style";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const registrationPageFields = {
  userName: "",
  userEmail: "",
  userPhoneNumber: "",
  userPassword: "",
  userCity: "",
};

const registrationValidationSchema = yup.object({
  userName: yup
    .string()
    .required("Обязательное поле")
    .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "Имя должно содержать только буквы"),
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Формат должен соответствовать формату email"),
  userPhoneNumber: yup
    .string()
    .required("Обязательное поле")
    .matches(/^9989[0123456789][0-9]{7}$/, "Введите правильно номер телефона"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать как минимум 4 символа!"),
  userCity: yup.string().required("Обязательное поле"),
});

export const RegistrationPage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: registrationPageFields,
    resolver: yupResolver(registrationValidationSchema),
  });

  const navigate = useNavigate();

  const onRegistrationFormSubmit = (data: any) => {
    console.log(data);
    if (data) {
      navigate("/main-page");
    }
  };

  return (
    <RegistrationStyle>
      <div className="RegistrationPage">
        <Heading headingType="h1" headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistrationFormSubmit)}>
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <AppInput
                hasError={!!errors.userName}
                errorText={errors.userName?.message as string}
                placeholder="Имя и фамилия"
                {...field}
              />
            )}
          />
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <AppInput
                hasError={!!errors.userEmail}
                errorText={errors.userEmail?.message as string}
                placeholder="email"
                {...field}
              />
            )}
          />
          <Controller
            name="userPhoneNumber"
            control={control}
            render={({ field }) => (
              <AppInput
                hasError={!!errors.userPhoneNumber}
                errorText={errors.userPhoneNumber?.message as string}
                placeholder="Номер телефона"
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                hasError={!!errors.userPassword}
                errorText={errors.userPassword?.message as string}
                placeholder="Пароль"
                {...field}
              />
            )}
          />
          <Controller
            name="userCity"
            control={control}
            render={({ field }) => (
              <AppInput
                hasError={!!errors.userCity}
                errorText={errors.userCity?.message as string}
                placeholder="Город"
                {...field}
              />
            )}
          />
          <AppButton
            type="submit"
            disabled={false}
            buttonLabel="Зарегистрироваться"
          />
        </form>
        <a href="#">Забыли пароль?</a>
        <RegistrationInfo />
      </div>
    </RegistrationStyle>
  );
};
