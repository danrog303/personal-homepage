import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCookieBite, FaShieldAlt } from "react-icons/fa";
import styles from "./CookieConsentBanner.module.scss";

const STORAGE_KEY = "cookieConsent";

export default function CookieConsentBanner() {
    const [visible, setVisible] = useState(false);
    const [hiding, setHiding] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            const t = setTimeout(() => setVisible(true), 900);
            return () => clearTimeout(t);
        }
    }, []);

    const accept = () => {
        setHiding(true);
        setTimeout(() => {
            localStorage.setItem(STORAGE_KEY, "true");
            setVisible(false);
        }, 350);
    };

    if (!visible) return null;

    return (
        <div className={`${styles.banner} ${hiding ? styles.hiding : ""}`} role="dialog" aria-label="Cookie consent">
            <div className={styles.iconWrapper}>
                <FaCookieBite size={22} />
            </div>
            <div className={styles.body}>
                <p className={styles.title}>Cookies & Analytics</p>
                <p className={styles.description}>
                    This site uses Google Analytics to understand how visitors interact with it.
                    No personal data is stored by this site.{" "}
                    <Link to="/privacy-policy" className={styles.policyLink}>
                        <FaShieldAlt size={10} /> Privacy policy
                    </Link>
                </p>
                <button className={styles.acceptBtn} onClick={accept}>
                    Got it
                </button>
            </div>
        </div>
    );
}
