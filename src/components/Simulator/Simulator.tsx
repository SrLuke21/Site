import React, { useState, useMemo } from 'react';
import styles from './Simulator.module.scss';

type WeatherProfile = 'ideal' | 'nublado' | 'chuvoso';

export const Simulator: React.FC = () => {
  const [weather, setWeather] = useState<WeatherProfile>('ideal');
  const [panelArea, setPanelArea] = useState<number>(10);
  const [poolVolume, setPoolVolume] = useState<number>(30000); // Litros

  const physicsData = useMemo(() => {
    // Valores de irradiância padrão aproximados (kWh/m²/dia)
    const irradianceMap: Record<WeatherProfile, number> = {
      ideal: 6.5,
      nublado: 2.2,
      chuvoso: 0.8
    };

    const efficiency = 0.20; // 20% eficiência de mercado padrão
    const dailyIrradiance = irradianceMap[weather];
    
    // Cálculo de energia gerada: E = A * r * H
    const energyGeneratedKwh = panelArea * efficiency * dailyIrradiance;
    
    // Aquecimento da piscina via Bomba de Calor (COP médio de 5.0)
    // Formula térmica: Q = m * c * dT -> dT = Q / (m * c)
    const cop = 5.0;
    const thermalEnergyJoules = energyGeneratedKwh * 3.6e6 * cop; 
    const waterMassKg = poolVolume;
    const specificHeatWater = 4186; // J/kg°C
    const deltaTemperature = thermalEnergyJoules / (waterMassKg * specificHeatWater);

    return {
      generation: energyGeneratedKwh.toFixed(2),
      tempRise: deltaTemperature.toFixed(1),
      irradiance: dailyIrradiance
    };
  }, [weather, panelArea, poolVolume]);

  return (
    <div className={styles.simulatorContainer}>
      <h3 className={styles.simTitle}>Simulador Dinâmico de Conversão</h3>
      
      <div className={styles.controlsGrid}>
        <div className={styles.controlGroup}>
          <label htmlFor="weather-select">Condição Climática do Dia</label>
          <select 
            id="weather-select" 
            value={weather} 
            onChange={(e) => setWeather(e.target.value as WeatherProfile)}
          >
            <option value="ideal">Dia Limpo de Sol (Plena Irradiação)</option>
            <option value="nublado">Dia Nublado (Radiação Difusa)</option>
            <option value="chuvoso">Tempestade/Chuva Intensa</option>
          </select>
        </div>

        <div className={styles.controlGroup}>
          <label htmlFor="area-range">Área Ocupada pelas Placas: {panelArea} m²</label>
          <input 
            id="area-range"
            type="range" 
            min="2" 
            max="50" 
            value={panelArea} 
            onChange={(e) => setPanelArea(Number(e.target.value))}
          />
        </div>

        <div className={styles.controlGroup}>
          <label htmlFor="pool-range">Volume da Piscina: {poolVolume / 1000} m³ (Liters)</label>
          <input 
            id="pool-range"
            type="range" 
            min="5000" 
            max="60000" 
            step="5000"
            value={poolVolume} 
            onChange={(e) => setPoolVolume(Number(e.target.value))}
          />
        </div>
      </div>

      <div className={styles.resultsGrid} aria-live="polite">
        <div className={styles.resultCard}>
          <span className={styles.label}>Radiação Incidente</span>
          <span className={styles.value}>{physicsData.irradiance} <span className={styles.unit}>kWh/m²</span></span>
        </div>
        <div className={styles.resultCard}>
          <span className={styles.label}>Energia Elétrica Produzida</span>
          <span className={styles.value} style={{color: '#FFB100'}}>{physicsData.generation} <span className={styles.unit}>kWh</span></span>
        </div>
        <div className={styles.resultCard}>
          <span className={styles.label}>Elevação Térmica Diária</span>
          <span className={styles.value} style={{color: '#0EA5E9'}}>+{physicsData.tempRise} <span className={styles.unit}>°C</span></span>
        </div>
      </div>
    </div>
  );
};

