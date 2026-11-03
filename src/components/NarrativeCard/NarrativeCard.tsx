import React from 'react';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <header className={styles.hero} role="banner">
      <div className={styles.content}>
        <span className={styles.tag}>Física Moderna & Sustentabilidade</span>
        <h1>Placas Fotovoltaicas</h1>
        <p>Como transformar a radiação solar em energia elétrica pelo efeito fotoelétrico?</p>
        <a href="#main-narrative" className={styles.cta}>Iniciar Jornada</a>
      </div>
    </header>
  );
};

