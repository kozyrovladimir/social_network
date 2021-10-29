import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import AddPost from "../AddPost/AddPost";
import Post from "../Post/Post";

function Profile() {
    return (
        <div className={styles.main_content}>
            <div className={styles.head_img_container}>
            </div>
            <ProfileInfo/>
            <AddPost/>
            <Post/>
        </div>
    )
}

export default Profile;