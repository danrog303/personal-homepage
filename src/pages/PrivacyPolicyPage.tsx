import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./PrivacyPolicyPage.module.scss";

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.page}>
            <nav className={styles.topBar}>
                <Link to="/" className={styles.backLink}>
                    <FaArrowLeft /> Back to homepage
                </Link>
            </nav>
            <main className={styles.content}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.updated}>Last updated: February 2026</p>

                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        This website (<strong>danielrogowski.net</strong>) is a personal portfolio
                        belonging to Daniel Rogowski. This privacy policy explains what data, if any,
                        is collected when you visit this site.
                    </p>
                </section>

                <section>
                    <h2>2. Analytics</h2>
                    <p>
                        This site uses Google Analytics to collect anonymous usage statistics such as
                        page views, session duration, and general geographic region. No personally
                        identifiable information is collected. Data is processed by Google LLC in
                        accordance with their{" "}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Privacy Policy
                        </a>
                        .
                    </p>
                </section>

                <section>
                    <h2>3. Cookies</h2>
                    <p>
                        Google Analytics sets cookies to distinguish users and sessions. A cookie
                        consent banner is shown on your first visit. You can withdraw consent at any
                        time by clearing your browser cookies.
                    </p>
                </section>

                <section>
                    <h2>4. Third-party services</h2>
                    <p>
                        This site may display Google AdSense advertisements, which may use cookies
                        to serve personalised ads. See Google's{" "}
                        <a
                            href="https://policies.google.com/technologies/ads"
                            target="_blank"
                            rel="noreferrer"
                        >
                            advertising policies
                        </a>{" "}
                        for details.
                    </p>
                </section>

                <section>
                    <h2>5. Data retention</h2>
                    <p>
                        This site does not operate any backend server or database. No personal data
                        is stored by the site owner.
                    </p>
                </section>

                <section>
                    <h2>6. Contact</h2>
                    <p>
                        For any questions regarding this privacy policy, contact:{" "}
                        <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                            {process.env.REACT_APP_EMAIL}
                        </a>
                        .
                    </p>
                </section>
            </main>
        </div>
    );
}
