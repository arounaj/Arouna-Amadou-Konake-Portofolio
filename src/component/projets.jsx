/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import myLogo from "/Users/aroun/portofolio/src/Logo.png";
import myRaver from "/Users/aroun/portofolio/src/Raver2.png";

export function Projets() {
  return (
    <>
      <h1 className="proj">Projets</h1>

      <div className="propor">
        <div className="minus">
          <img src={myLogo} />
          <div className="para">
            <p>
              Minus est un projet d'école, realise en équipe. On devait faire
              des comparaisons de produits sur le marché ,faire un listage de
              contenue, realise l'arborescence, protypage, Wireframe avec Figma;
              donc on a fait tout le côté UI/UX puis le front. Ce projet a été
              realise en 2 semaines car après on devait tout codes en HTMl,CSS
              pour faire une presentation a la fin. Voici le lien en du site
              web.
            </p>
            <a
              target="_blank"
              className="minn"
              href="https://illustrious-tulumba-d14e4a.netlify.app/"
            >
              Minus
            </a>
          </div>
        </div>
        <div className="minus">
        
          <img src={myRaver} />
          <div className="parar">
            <p>
              Raver est un projet d'école qui consistait à créer un mini réseau
              social,j'ai trouvé pris comme inspiration Facebook et Twitter et
              j'ai mis en œuvre un système de messagerie, d'ajout d'amis, de
              likes, de commentaires et de publication, afin d'offrir aux
              utilisateurs une expérience sociale complète. Au cours de ce
              projet, j'ai utilisé pour développer cette plateforme les langages
              HTML, CSS et JavaScript, PHP, SQL .
            </p>
          </div>
        </div>
        <div className="minus">
          <img src={myRaver} />
          <div className="parar">
            <p>
              Projet de Soutenance pour la licence, il porte le même nom que mon
              projet Back-End, j'ai créé un site web cde covoiturage en single
              page, je me suis inspiré de Blabla car comme exemple. J'ai utilisé
              les langages suivants HTML, Css, Js, Php et Sql. Le site contient
              une partie connexion/inscription, les différents chauffeurs avec
              leurs numéros et la possibilité des appelle directement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
