import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

export interface ContactItem {
    name: string;
    icon: React.ReactNode;
    value: React.ReactNode;
}

const phoneNumber = import.meta.env.VITE_PHONE || "unavailable";
const emailAddress = import.meta.env.VITE_EMAIL || "unavailable";
const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL || "#";

export const contactItems: ContactItem[] = [
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
];
