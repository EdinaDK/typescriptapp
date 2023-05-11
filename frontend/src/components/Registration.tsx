/*  import React from 'react';
import styles from "./Registration.module.css";
import {ReactComponent as IconLogo} from "./images/iconProfile.svg"


export function Registration(props: any) {
    return (
        <div>
            <form  className={styles.regform}>
                <div className={styles.fileUpload}>
                    <div className={styles.fileUploaderForm}>
                        <IconLogo className={styles.icon}/>
                        <div>
                            <input type="file" accept="image/*" title="&nbsp;"/>
                            <button className={styles.fileBtn}>Загрузить фото профиля</button>
                        </div>
                    </div>
                </div>
                <h2 className={styles.title}>Регистрация в TypeCode</h2>
                <div className={styles.textFields}>
                <p>Логин: <input
                    type="username"
                    id="username"
                    name="username"
                /></p>
                <p>Имя: <input
                    type="username"
                    id="username"
                    name="username"
                /></p>
                <p>Email: <input
                    type="email"
                    id="email"
                    name="email"
                    formNoValidate
                /></p>
                <p>Пароль: <input
                    type="password"
                    id="password"
                    name="password"
                /></p>
                <p>Повторите пароль: <input
                    type="password"
                    id="password2"
                    name="password2"
                /></p>
                </div>
                <button className={styles.btnRegister}>Создать аккаунт</button>
            </form>
            <div className={styles.overlay}></div>
        </div>
    );
}*/

import { ValidationErrors } from "final-form";
import React from "react";
import { Form as FinalForm, Field } from 'react-final-form'
import { ValidationError } from "yup";
import styles from "./Registration.module.css";
import {ReactComponent as IconLogo} from "./images/iconProfile.svg"
import * as yup from 'yup';

type FormValues = {
  login: string;
  email: string;
  password: string;

}

type RegistrationProps = {
    handleRegisterFormHide: (React.MouseEventHandler<HTMLDivElement>);
  }

const validationSchema = yup.object({
    login: yup
    .string()
    .matches(/^([a-z0-9]{6,20})$/, "Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.")
    .required("Логин не может быть пустым."),
    email: yup
    .string()
    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Введите действительную электронную почту")
    .required("email не может быть пустым"),
    name: yup
    .string()
    .matches(/^[\u0400-\u04FF]+$/, "Введите имя русскими символами")
    .required("Имя не может быть пустым"),
    password: yup
    .string()
    .required("Пароль не может быть пустым."),
    confirm_password: yup
    .string()
    .required("Введите пароль повторно")
    .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
});

const validate = async (
  values: FormValues
): Promise<ValidationErrors | undefined> => {
  try {
    await validationSchema.validate(values, {abortEarly: false})
  } catch (error: any) {
    const errors: { [value: string]: string } = {};
    error.inner.forEach((e: ValidationError) => {
      if (e.path) {
        errors[e.path] = e.message;
      }
    });
    return errors;
  }
}

export const Registration: React.FC<RegistrationProps> = ({ handleRegisterFormHide }) =>  {
  const onSubmit = (values: FormValues) => {
    // отправка данных на сервер
    console.log(values);
  };

  return <>
    <FinalForm 
      onSubmit={onSubmit}
      validate={validate}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit} className={styles.regform}>
            <div className={styles.fileUpload}>
                    <div className={styles.fileUploaderForm}>
                        <IconLogo className={styles.icon}/>
                        <div>
                            <input type="file" accept="image/*" title="&nbsp;"/>
                            <button className={styles.fileBtn}>Загрузить фото профиля</button>
                        </div>
                    </div>
                </div>
                <h2 className={styles.title}>Регистрация в TypeCode</h2>
                <div className={styles.textFields}>
          <Field name="login">
            {({input, meta}) => (
              <div> 
                <p> Логин
                  <input type="text" {...input} placeholder="Логин"/>
                </p>
                {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="name">
            {({input, meta}) => (
              <div> 
                <p> Имя
                  <input type="text" {...input} placeholder="Имя"/>
                </p>
                {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({input, meta}) => (
              <div> 
                <p> email
                  <input type="text" {...input} placeholder="email"/>
                </p>
                {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({input, meta}) => (
              <div>
                <p> Пароль
                  <input type="password" {...input} placeholder="Пароль"/>
                  </p>
                {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="confirm_password">
            {({input, meta}) => (
              <div>
               <p> Повторите пароль
                  <input type="password" {...input} placeholder="Пароль"/>
                  </p>
                {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
              </div>
            )}
          </Field>
          </div>
          <button className={styles.btnRegister}>Создать аккаунт</button>
        </form>
      )}>
    </FinalForm>

    <div className={styles.overlay} onClick={handleRegisterFormHide}></div>
  </>;
}


