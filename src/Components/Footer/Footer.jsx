import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerNav}>
        <li className={styles.footerItem}>
          <a className={styles.footerLink}>About</a>
        </li>
        <li className={styles.footerItem}>
          <a className={styles.footerLink}>Terms of Use</a>
        </li>
        <li className={styles.footerItem}>
          <a className={styles.footerLink}>Privacy Policy</a>
        </li>
        <li className={styles.footerItem}>
          <a className={styles.footerLink}>Careers</a>
        </li>
        <li className={styles.footerItem}>
          <a className={styles.footerLink}>Blog</a>
        </li>
        <li className={styles.footerItem}>
          <a className={styles.footerLink}>Contact Us</a>
        </li>
      </ul>
      <img src={logo} alt="Logo" className={styles.footerLogo} />
      <p className={styles.footerCopyright}>
        &copy; Copyright by
        <span className={styles.footerBrand}> Skelbiu.lt</span>. All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
