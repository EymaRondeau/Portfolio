import React from 'react';
import '../styles/Values.scss'; // Assurez-vous que le chemin est correct

const Values = () => {
  return (
    <section className="values-section">
      <h2 className="values-title">Nos Valeurs</h2>
      <div className="values-container">
        <div className="value-item">
          <h3 className="value-title">Confiance</h3>
          <p>La confiance est au cœur de notre approche. Nous nous engageons à bâtir des relations solides basées sur l’honnêteté et la transparence.</p>
        </div>
        <div className="value-item">
          <h3 className="value-title">Adaptabilité</h3>
          <p>Dans un monde en constante évolution, nous nous engageons à rester flexibles et à nous adapter aux besoins changeants de nos clients et du marché.</p>
        </div>
        <div className="value-item">
          <h3 className="value-title">Excellence</h3>
          <p>Nous visons l’excellence dans tout ce que nous faisons. Chaque projet est une occasion de repousser nos limites et d’offrir des solutions de haute qualité à nos clients.</p>
        </div>
      </div>
    </section>
  );
};

export default Values;