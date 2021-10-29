import React from 'react';
import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.post}>
            <img src="https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website.png" alt="avatar"/>
            <span> Post about me</span>
        </div>
    );
};

export default Post;