import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error404.scss';

const Error404 = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link to="/" className="return-button">Retour à l'accueil</Link>
    </div>
  );
};

export default Error404;