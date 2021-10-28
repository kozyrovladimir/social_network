import React from 'react';
import styles from './Header.module.css';

function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <img src="logo.svg" alt="logo"/>
            </div>
        </header>
    )
}

export default Header;