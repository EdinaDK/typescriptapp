import { ValidationErrors } from "final-form";
import React, { useState } from "react";
import { Form as FinalForm, Field } from 'react-final-form'
import { ValidationError } from "yup";
import styles from "./Authorization.module.css";
import * as yup from 'yup';

type FormValues = {
  login: string;
  password: string;
}

type AuthorizationProps = {
    handleLoginFormHide: (React.MouseEventHandler<HTMLDivElement>);
  }

const validationSchema = yup.object({
  login: yup
    .string()
    .matches(/^([a-z0-9]{6,20})$/, "Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.")
    .required("Логин не может быть пустым."),
  password: yup
    .string()
    .required("Пароль не может быть пустым."),
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

export const Authorization: React.FC<AuthorizationProps> = ({ handleLoginFormHide }) => {

    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

  const onSubmit = (values: FormValues) => {
    // отправка данных на сервер
    console.log(values);
  };

  return <>
    <FinalForm 
      onSubmit={onSubmit}
      validate={validate}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit} className={styles.autoForm}>
          <Field name="login">
            {({input, meta}) => (
              <div>          
                  <input type="text" {...input} placeholder="Логин"/>
                {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({input, meta}) => (
              <div>
                  <input type="password" {...input} placeholder="Пароль"/>
                {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
              </div>
            )}
          </Field>
          <button type="submit">Войти</button>
        </form>
      )}>
    </FinalForm>

    <div className={styles.overlay} onClick={handleLoginFormHide}></div>
  </>;
}




