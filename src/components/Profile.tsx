import React from 'react';
import styles from './Profile.module.css';

function Profile () {
    return (
        <div className={styles.main_content}>
            <div className={styles.head_img_container}>
            </div>
            <div className={styles.profile}>
                <div className={styles.profile_img}>
                    <img src="cat.jpg" alt="cat"/>
                </div>
                <div className={styles.profile_info}>
                    <h2>vladimir</h2>
                    <p>Age: 26</p>
                    <p>Hobby: computer games</p>
                    <p>Working: web-developer</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;