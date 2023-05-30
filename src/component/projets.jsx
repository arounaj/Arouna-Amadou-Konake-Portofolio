import myLogo from '/Users/aroun/portofolio/src/Logo.png';
 

export function Projets () {
    faireRedirection=()=> {
        let url = "https://illustrious-tulumba-d14e4a.netlify.app/",
        let history = useHistory(),
        history.push(url),
    }
      
    return (
    
        <>
        <h1>Projets</h1>
        <div className='propor'>
        
            <div className="minus">
            <img src={myLogo} />
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
            <div className="minus">

            <img src={myLogo} />
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
            <p> -https://illustrious-tulumba-d14e4a.netlify.app/</p>   
            </div>
            </div>
            </div>
        </>
    )
}