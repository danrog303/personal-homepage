import React from 'react';
import styles from './TechnologiesSection.module.scss';
import { technologyItems } from '../data/technologiesData';

export default function TechnologiesSection() {
    return <>
        <section id="technologies">
            <h2>Technologies</h2>
            <div className={styles.technologyCard}>
                {technologyItems.map(technologyCategoryItem => <div className={styles.techology} key={technologyCategoryItem.category.toString()}>
                    <div className={styles.technologyName}>{technologyCategoryItem.category}</div>
                    <div className={styles.technologyItems}>
                        {technologyCategoryItem.items.map(technologyItem => (
                            <div className={styles.technologyItem} key={technologyItem.name}>
                                <img src={technologyItem.image} alt={`${technologyItem.name} logo`} loading="lazy" fetchPriority="low" />
                                {technologyItem.name}
                            </div>
                        ))}
                    </div>
                </div>)}
            </div>
        </section>
    </>
;
}
