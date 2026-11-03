import React, { useEffect } from 'react';
import { AccessibilityBar } from './components/AccessibilityBar/AccessibilityBar';
import { Hero } from './components/Hero/Hero';
import { NarrativeCard } from './components/NarrativeCard/NarrativeCard';
import { Simulator } from './components/Simulator/Simulator';

export const App: React.FC = () => {
  
  useEffect(() => {
    // Injeção assíncrona do Widget do VLibras
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.VLibras) {
        // @ts-ignore
        new window.VLibras.Widget('https://vlibras.gov.br');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <a href="#main-narrative" className="sr-only">Pular para o conteúdo principal</a>
      <AccessibilityBar />
      <Hero />
      
      <main id="main-narrative" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        
        <NarrativeCard title="Estrutura e Materiais da Célula Fotovoltaica" index="01">
          <p>Uma célula fotovoltaica é composta majoritariamente por <strong>Silício (Si)</strong>, um elemento semicondutor exaustivamente estudado na física do estado sólido. Para que ocorra condução elétrica sob estímulo luminoso, o silício puro precisa passar pelo processo de <strong>dopagem química</strong>, gerando duas camadas distintas:</p>
          <ul>
            <li><strong>Camada Semicondutora Tipo-N (Negativa):</strong> Dopada com átomos de Fósforo (P), elemento que possui cinco elétrons de valência. Como o silício possui quatro, a ligação gera elétrons livres adicionais.</li>
            <li><strong>Camada Semicondutora Tipo-P (Positiva):</strong> Dopada com átomos de Boro (B), elemento com apenas três elétrons de valência. Isso gera "lacunas" (ausência de elétrons ativos).</li>
          </ul>
          <p>No ponto de contato geométrico dessas duas camadas, forma-se a <strong>Junção P-N</strong>. É nessa fronteira que os elétrons migram espontaneamente criando uma barreira de potencial e um campo elétrico interno direcionado e permanente.</p>
        </NarrativeCard>

        <NarrativeCard title="O Salto Quântico: Fótons gerando Corrente" index="02">
          <p>O funcionamento da placa solar baseia-se diretamente no <strong>Efeito Fotoelétrico</strong>, pilar fundamental da Física Moderna validado matematicamente por Albert Einstein. A luz solar não é uma onda contínua, mas sim um fluxo corpuscular composto por pacotes discretos de energia eletromagnética chamados <strong>fótons</strong>.</p>
          <p>A energia de cada fóton é governada pela equação fundamental:</p>
          <p style={{ textAlign: 'center', margin: '1rem 0', fontWeight: 'bold', color: '#FFB100' }}>E = h · f</p>
          <p>Onde <em>h</em> representa a Constante de Planck e <em>f</em> a frequência da radiação. Quando um fóton incide na camada de silício, se sua energia for superior à energia de banda proibida (<em>bandgap</em>) do material, ele é absorvido, cedendo integralmente sua energia a um elétron ligado.</p>
          <p>Esse elétron adquire energia mecânica suficiente para romper a atração do núcleo atômico e saltar para a <strong>banda de condução</strong>. Livre, o elétron sofre a deflexão mecânica do campo elétrico interno da junção P-N e é empurrado em direção aos filamentos condutores metálicos exteriores, estabelecendo uma <strong>corrente elétrica contínua</strong> estável.</p>
        </NarrativeCard>

        <NarrativeCard title="Relação: Intensidade, Potência e Eficiência" index="03">
          <p>A performance energética de um módulo fotovoltaico é ditada por parâmetros físicos restritivos:</p>
          <ul>
            <li><strong>Intensidade da Radiação:</strong> Modifica diretamente a amplitude da corrente. Uma intensidade luminosa superior significa maior quantidade volumétrica de fótons por segundo, gerando consequentemente maior taxa de liberação eletrônica.</li>
            <li><strong>Potência Gerada:</strong> Determina o trabalho elétrico total realizável ($P = V \times I$). Enquanto a tensão permanece razoavelmente fixa pelas características termodinâmicas do silício, a potência escala de maneira linear junto com a radiação.</li>
            <li><strong>Eficiência Comercial (15% a 22%):</strong> É severamente limitada pela física teórica através do <strong>Limite de Shockley-Queisser</strong>. Grande parte dos fótons solares de espectro infravermelho não carregam energia suficiente para o salto eletrônico (passam direto), enquanto fótons ultravioleta de alta frequência possuem energia em excesso, desperdiçada instantaneamente na forma de calor por vibração atômica.</li>
          </ul>
        </NarrativeCard>

        <NarrativeCard title="A Variância Dinâmica do Clima" index="04">
          <p>A produção energética é altamente instável devido a modificações na atmosfera terrestre. Em um <strong>dia nublado</strong>, as nuvens densas refletem e absorvem o espectro direto da luz. A placa deixa de receber radiação direta e opera via <strong>radiação difusa</strong>.</p>
          <p>Como os elétrons dependem da energia individual de cada fóton atingido e não do calor macroscópico, a conversão física continua ocorrendo mesmo no frio ou mormaço, porém a potência cai para patamares entre 10% e 25% da nominal devido ao menor volume de fótons úteis furando a barreira de nuvens.</p>
        </NarrativeCard>

        <NarrativeCard title="Aplicação Prática: Aquecimento de Piscina" index="05">
          <p>Uma placa fotovoltaica comum gera Corrente Contínua (CC). Para elevar a temperatura da água de uma piscina da maneira mais otimizada pelo mercado de engenharia, a energia segue o seguinte ciclo físico:</p>
          <p>A corrente flui até um componente eletrônico chamado <strong>Inversor</strong>, encarregado de chavear e modular a eletricidade para Corrente Alternada (CA). Essa eletricidade alimenta um equipamento termodinâmico chamado <strong>Bomba de Calor</strong> (ou Trocador de Calor).</p>
          <p>Diferente de uma resistência comum (que desperdiça energia gerando calor bruto), a bomba de calor usa um compressor para retirar a energia térmica contida no próprio ar ambiente e transferi-la mecanicamente para o fluxo de água da piscina através de um circuito fechado de gás refrigerante. Isso resulta em um coeficiente de performance extremamente elevado.</p>
          
          <Simulator />
        </NarrativeCard>

      </main>
    </>
  );
};

