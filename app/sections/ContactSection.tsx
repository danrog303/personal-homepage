import React from "react";
import styles from "./ContactSection.module.scss";
import { contactItems } from "../data/contactData";

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