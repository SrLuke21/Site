import React, { ReactNode } from 'react';
import styles from './NarrativeCard.module.scss';

interface NarrativeCardProps {
  title: string;
  index: string;
  children: ReactNode;
}

export const NarrativeCard: React.FC<NarrativeCardProps> = ({ title, index, children }) => {
  return (
    <section className={styles.card} aria-labelledby={`title-${index}`}>
      <div className={styles.indexBadge} aria-hidden="true">{index}</div>
      <h2 id={`title-${index}`} className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

