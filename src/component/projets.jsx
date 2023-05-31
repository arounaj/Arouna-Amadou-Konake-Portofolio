import myLogo from '/Users/aroun/portofolio/src/Logo.png';
import myRaver from '/Users/aroun/portofolio/src/Raver2.png';




export function Projets () {
       
      
    return (
    
        <>
        <h1 className='proj'>Projets</h1>
        <div className='propor'>
        
            <div className="minus">
            <img src={myLogo} />
            <div className='para'>
            <p>Minus est un projet d'école, realise en équipe. On devait faire des comparaisons de produits sur le marché 
                ,faire un listage de contenue, realise l'arborescence, protypage, Wireframe avec Figma;
                donc on a fait tout le côté UI/UX puis le front. Ce projet a été realise
                en 2 semaines car après on devait tout codes en HTMl,CSS pour faire une presentation a la fin.
                Voici le lien en du site web.
     
            </p>
            <a target='_blank' className='minn' href="https://illustrious-tulumba-d14e4a.netlify.app/">Minus</a>   
            </div>
            </div>
            <div className="minus">

            <img src={myRaver} />
            <div className='para'>
            <p>-Comparaison de produits sur le marché</p> 
            <p>-Documentation écrivant en détail les objectifs, les exigences fonctionnelles et techniques d'un produit</p>   
            <p> -Mise en place des listes de contenues</p>   
            <p> -Réalisation de l'arborescence </p>   
            <p> -Représentation visuelle statique du design d'un produit</p>   
            <p>-Mise en place des persona</p>    
            <p>-Création d'un wireframe</p>    
            <p>-Conception du prototype sous figma</p>    
            <p> -Testing du parcours utilisateurs</p>   
            <p> -</p>   
            </div>
            </div>
            </div>
        </>
    )
}
