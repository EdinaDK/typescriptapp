import React from 'react';
import {Header} from "../components/Header/Header";
import styles from './UserPage.module.css'
import {ReactComponent as IconProfile} from '../components/images/userPhoto.svg'


function UserPage(props: any) {

    const achievements = [
        {
            id: 1,
            title: 'Районы, массивы'
        },
        {
            id: 2,
            title: 'Ачивка 2'
        },
        {
            id: 3,
            title: 'Ачивка 3'
        },
        {
            id: 4,
            title: 'Ачивка 4'
        },

    ]

const showAchievments = achievements.map((item) => {
    return (
        <div className={styles.prize}>
            <div className={styles.prizePic}></div>
            <h4>
                {item.title}
            </h4>
        </div>
    )
})





    return (
        <>
            <Header />
            <div className={styles.userPage}>
                <div className={styles.profileIcon}>
                    <IconProfile className={styles.userPhoto}/>
                    <div className={styles.userInfo}>
                        <p className={styles.userinfoText}>Darya</p>
                        <p className={styles.userinfoText}>city Novosibirsk</p>
                        <p className={styles.userinfoText}>offline</p>
                        <p className={styles.userinfoText}>since 25.03.2023</p>
                    </div>
                        <button className={styles.btnEdit}>Редактировать данные</button>
                    <p className={styles.userLogin}>@daaaryaaa</p>
                </div>
                <div className={styles.stats}>

                </div>
                <div className={styles.achieves}>
                    <div className={styles.titleAch}>
                        <h3 className={styles.titAchieves}>Достижения</h3>
                    </div>
                    <div className={styles.prizes}>
                        {showAchievments}
                    </div>
                </div>
            </div>

        </>
    );
}

export default UserPage;
