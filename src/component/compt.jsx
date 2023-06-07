/* eslint-disable jsx-a11y/alt-text */
import '/Users/aroun/portofolio/src/App.css';
import myCss from '/Users/aroun/portofolio/src/CSS3_logo_and_wordmark.png';
import myHtml from '/Users/aroun/portofolio/src/images-removebg-preview (2).png';
import myPhp from '/Users/aroun/portofolio/src/PHP-logo.png';
import myReact from '/Users/aroun/portofolio/src/png-transparent-aperture-laboratories-science-technology-laboratory-portal-science-blue-text-computer-thumbnail-removebg-preview.png';
import myJs from '/Users/aroun/portofolio/src/js-logo-badge-512.png';
import mySql from '/Users/aroun/portofolio/src/sql-projekt-ag-logo-vector-removebg-preview.png';
import myWpr from '/Users/aroun/portofolio/src/simplified-removebg-preview.png';
import myNode from '/Users/aroun/portofolio/src/png-transparent-deploying-node-js-website-development-javascript-web-application-vue-js-text-rectangle-logo-removebg-preview.png';
import myPyt from '/Users/aroun/portofolio/src/Python-logo-notext.svg.png';




export const Compt = () => {

    return (
        <>
        <h1 className='compte'> Compétences </h1>
        <div className='compta'>
            <img src={myCss} />
            <img src={myHtml} />
            <img src={myPhp} />
            <img src={myReact} />
            <img src={myJs} />
            <img src={mySql} />
            <img src={myWpr} />
            <img src={myNode} />
            <img src={myPyt} />

        </div>
        </>
    )
}

