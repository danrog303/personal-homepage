import {FaEnvelope, FaLinkedin, FaPhone} from "react-icons/fa";
import React from "react";
import styles from "./ContactSection.module.scss";

const phoneNumber = process.env.REACT_APP_PHONE || "unavailable";
const emailAddress = process.env.REACT_APP_EMAIL || "unavailable";
const linkedInUrl = process.env.REACT_APP_LINKEDIN_URL || "#";

const contactItems = [
    {
        name: "E-mail",
        icon: <FaEnvelope />,
        value: <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
    },
    {
        name: "Phone number",
        icon: <FaPhone />,
        value: <p>{phoneNumber}</p>
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        value: <p><a href={linkedInUrl} target="_blank" rel="noreferrer">Daniel Rogowski</a></p>
    }
]

export default function ContactSection() {
    return <>
        <section id="contact">
            <h2>Contact me</h2>

            <div className={styles.contactCard}>
                <div className={styles.contactItems}>
                    {contactItems.map(contactItem => <div className={styles.contactItem} key={contactItem.name.toString()}>
                        <div className={styles.contactItemName}>
                            {contactItem.icon}
                            <h3>{contactItem.name}</h3>
                        </div>

                        {contactItem.value}
                    </div>)}
                </div>
            </div>
        </section>
    </>;
}