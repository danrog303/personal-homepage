import React from "react";
import styles from "./Timeline.module.scss";

export type TimelineItem = {
    mainHeading?: string;
    subHeading: string;
    description?: string;
    startDate: string;
    endDate: string;
    tags?: string[];
};

export type TimelineProps = {
    items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
    return (
        <div className={styles.timeline}>
            {items.map((item, idx) => (
                <div key={idx} className={styles.item}>
                    <div className={styles.dot} />
                    <h3 className={styles.position}>{item.mainHeading}</h3>
                    <p className={styles.company}>{item.subHeading}</p>
                    <p className={styles.date}>
                        {item.startDate} – {item.endDate}
                    </p>
                    {item.description && (
                        <p className={styles.description}>{item.description}</p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                        <div className={styles.tags}>
                            {item.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
