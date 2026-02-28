import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
    return (
        <div className={styles.page}>
            <nav className={styles.topBar}>
                <Link to="/" className={styles.backLink}>
                    <FaArrowLeft /> Back to homepage
                </Link>
            </nav>
            <div className={styles.glow} />
            <div className={styles.bigNumber}>404</div>
            <main className={styles.content}>
                <span className={styles.badge}>Error 404</span>
                <h1 className={styles.heading}>Page not found</h1>
                <p className={styles.sub}>
                    The page you're looking for has been moved, deleted, or never existed.
                </p>
                <Link to="/" className={styles.homeLink}>
                    <FaHome size={15} />
                    Back to homepage
                </Link>
            </main>
        </div>
    );
}
