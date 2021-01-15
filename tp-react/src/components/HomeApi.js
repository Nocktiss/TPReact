import React from 'react';

import tmbd from '../image/tmdb.png';

class HomeApi extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <h1>API utilisé :</h1>
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://www.themoviedb.org/?language=fr";
              }}>
                <img
                  className="logo"
                  src={tmbd} alt="logo" />
              </button>
              <h2>Cette API permet de récuperer une liste de film</h2>
              <ul>
                <li>Faire une recherche des films avec le bouton "+ Ajouté"</li>
                <li> Le boutton Film à regarder, permet de faire un listage des films à voir plus tard sur la page "Liste de film à regarder</li>
                <li> Le boutton Film vu, va enregistrer les films sur la page "film vu"</li>
                </ul>              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeApi;