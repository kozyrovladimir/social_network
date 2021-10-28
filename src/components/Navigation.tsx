import React from 'react';
import styles from './Navigation.module.css';

function Navigation () {
    return (
        <nav className={styles.nav}>
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
        </nav>
    )
}

export default Navigation;