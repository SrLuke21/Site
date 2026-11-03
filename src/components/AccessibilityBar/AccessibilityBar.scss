import React, { useState, useEffect } from 'react';
import styles from './AccessibilityBar.module.scss';

export const AccessibilityBar: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(100);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isReading, setIsReading] = useState<boolean>(false);

  const handleFontSizeChange = (action: 'increase' | 'decrease') => {
    const newSize = action === 'increase' ? fontSize + 10 : fontSize - 10;
    if (newSize >= 80 && newSize <= 140) {
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle('high-contrast');
  };

  const handleTextToSpeech = () => {
    const mainContent = document.getElementById('main-narrative');
    if (!mainContent) return;

    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    } else {
      window.speechSynthesis.cancel();
      const text = mainContent.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.onend = () => setIsReading(false);
      setIsReading(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  return (
    <nav className={styles.container} aria-label="Ferramentas de acessibilidade">
      <div className={styles.wrapper}>
        <div className={styles.group}>
          <button onClick={() => handleFontSizeChange('increase')} aria-label="Aumentar tamanho do texto">A+</button>
          <button onClick={() => handleFontSizeChange('decrease')} aria-label="Diminuir tamanho do texto">A-</button>
          <button onClick={toggleHighContrast} aria-label="Alternar alto contraste">🌓 Contraste</button>
        </div>
        <div className={styles.group}>
          <button 
            onClick={handleTextToSpeech} 
            className={isReading ? styles.activeSpeech : ''} 
            aria-label={isReading ? "Parar leitura de tela" : "Ler o conteúdo do site em voz alta"}
          >
            {isReading ? '⏹ Parar Leitor' : '🔊 Ouvir Site'}
          </button>
        </div>
      </div>
      <div id="vlibras-container" data-vlibras-widget></div>
    </nav>
  );
};

