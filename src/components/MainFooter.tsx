import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainFooter.module.scss";

export default function MainFooter() {
    return <>
        <footer className={styles.footer}>
            <p>
                &copy; 2026
                | Daniel Rogowski
                | All rights reserved
                | <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
        </footer>
    </>;
}
