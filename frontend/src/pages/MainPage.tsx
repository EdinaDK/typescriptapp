import React from 'react';
import styles from "./MainPage.module.css"
import {Authorization} from "../components/Authorization/Authorization";
import {Registration} from  "../components/Registration";
import CountUp from "react-countup";
import TypeScript from "../components/images/hello-world.gif"

export const MainPage = () => {

    const [openLoginForm, setIsOpenLoginForm] = React.useState(false);
    const [openRegisterForm, setIsOpenRegisterForm] = React.useState(false);
    const handleLoginFormShow = () => { setIsOpenLoginForm(true) };
    const handleRegisterFormShow = () => { setIsOpenRegisterForm(true) };
    
    const handleLoginFormHide = () =>
    {
        setIsOpenLoginForm(false)
    }

    const handleRegisterFormHide = () =>
    {
        setIsOpenRegisterForm(false)
    }


    return (
        <div style={{position: "fixed", top: "0", left: "0", width: "100%",
            background:"linear-gradient(90deg, rgba(2, 0, 36, 0.9990371148459384) 0%, " +
                "rgba(115, 1, 121, 1) 39%, rgba(0, 212, 255, 1) 100%)",
            height:"100%", overflowX:"hidden"
        }} className={styles.main}>
            <h1 className={styles.title}>Изучай TypeScript по-новому <br/> вместе с TypeCode</h1>
            <button className={`${styles.buttons} ${styles.signIn}`} onClick={handleLoginFormShow}>Войти</button>
            <div className={styles.container}>
                <div className={styles.blockLeft}>
                    <p  className={`${styles.paragraph} ${styles.one}`}>
                        Новые способы изучения, включающие в себя теоритеские и практические методы.
                        Решай более 209192 задач, проходи более 30 тематических курсов и получай значки за каждое успешное прохождение!!
                    </p>
                    <img style={{width: "100%"}} src={TypeScript} />
                </div>
                <div className={styles.blockRight}>
                    <div> <CountUp end={119123} duration={5} className={styles.countUp} suffix={" строк"}/> </div>
                    <p  className={`${styles.paragraph} ${styles.one}`}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <p  className={`${styles.paragraph} ${styles.one}`}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <p  className={`${styles.paragraph} ${styles.one}`}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                    </p>
                    <p  className={`${styles.paragraph} ${styles.one}`}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
            <button className={`${styles.buttons} ${styles.signUp}`} onClick={handleRegisterFormShow}>Создать аккаунт</button>
            { openLoginForm ? <Authorization handleLoginFormHide={handleLoginFormHide}/> : null }
            { openRegisterForm ? <Registration handleRegisterFormHide={handleRegisterFormHide} /> : null }
        </div>
    );
}
export default MainPage;
