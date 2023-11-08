import React from 'react';
import '../css/sobre.css';

function Sobre() {
  return (
    <div>
      <header>
        <a href="Main.html">Voltar</a>
        <h1>Clínica Veterinária VitalVet</h1>
      </header>

      <section>
        <h2>Sobre a VitalVet</h2>
        <p>A Clínica Veterinária VitalVet é um centro dedicado ao cuidado e bem-estar de animais de estimação. Nossa equipe de veterinários altamente qualificados está comprometida em fornecer serviços de alta qualidade para garantir a saúde e a felicidade dos seus animais de estimação.</p>

        <p>Nós oferecemos uma ampla gama de serviços veterinários, incluindo consultas de rotina, vacinações, cirurgias, tratamento de doenças e muito mais. Nosso objetivo é fornecer atendimento compassivo e personalizado para atender às necessidades individuais de cada animal.</p>

        <p>Na VitalVet, acreditamos que animais de estimação são membros importantes da família, e estamos aqui para ajudar você a proporcionar a eles uma vida longa e saudável.</p>
      </section>

      <section>
        <h2>Nossos Serviços</h2>
        <ul>
          <li>Consultas veterinárias</li>
          <li>Vacinações</li>
          <li>Cirurgias</li>
          <li>Exames laboratoriais</li>
          <li>Tratamento de doenças</li>
          <li>Atendimento de emergência</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 Clínica Veterinária VitalVet</p>
      </footer>
    </div>
  );
}

export default Sobre;
