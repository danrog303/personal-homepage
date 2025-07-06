import React from "react";
import styles from "./MainFooter.module.scss";

export default function MainFooter() {
    return <>
        <footer className={styles.footer}>
            <p>
                &copy; 2025
                |
                Daniel Rogowski
                |
                Color scheme inspired by {" "}
                <a href={"https://www.adhamdannaway.com/"}>Adham Dannaway</a>'s website.
            </p>
        </footer>
    </>;
}