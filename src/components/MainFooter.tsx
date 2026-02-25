import React from "react";
import styles from "./MainFooter.module.scss";

export default function MainFooter() {
    return <>
        <footer className={styles.footer}>
            <p>
                &copy; 2026
                |
                Daniel Rogowski
                |
                All rights reserved
            </p>
        </footer>
    </>;
}