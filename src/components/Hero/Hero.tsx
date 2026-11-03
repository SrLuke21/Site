import React from 'react';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>
          ENERGIA RENOVÁVEL
        </span>

        <h1>
          A ciência por trás da
          <span> energia solar</span>
        </h1>

        <p>
          Descubra como a luz do Sol se transforma em
          eletricidade através da física dos semicondutores,
          do efeito fotoelétrico e da tecnologia fotovoltaica.
        </p>

        <a href="#main-narrative" className={styles.button}>
          Explorar o funcionamento
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.sun}>
          <div className={styles.sunCore} />
        </div>

        <div className={styles.panel}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className={styles.panelColumn} />
          ))}
        </div>

        <div className={styles.energyLine} />
      </div>
    </section>
  );
};
