import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
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
    );
};

export default ProfileInfo;