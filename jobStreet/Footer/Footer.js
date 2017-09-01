import React from 'react';
import styles from './footer.less';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a className={styles.link} href="#">
                       JobStreet International
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">
                        Site Map
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">
                        About Us
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">
                        Work With Us
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">
                        Terms of Use
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">
                        Privacy Policy
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">
                        Safe Job Search Guide
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">
                        Help
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">
                        Send Feedback
                    </a>
                </li>
            </ul>
            <p className={styles.copyright}>Copyright © 2017 JobStreet.com</p>
        </footer>
    );
};

export default Footer;
