/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import '/Users/aroun/portofolio/src/App.css';
import linke from '/Users/aroun/portofolio/src/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930587_72.png';
import insta from '/Users/aroun/portofolio/src/vecteezy_instagram-logo-png-instagram-icon-transparent_18930415_795.png';
import git from '/Users/aroun/portofolio/src/vecteezy_github-logo-git-hub-icon-on-white-background_16833872-removebg-preview.png';


export function Resaux() {
    return(
		<div className="resaux">
            <a target='_blank' href="https://www.linkedin.com/in/arouna-amadou-konake-556559198/"> <img src={linke}  /> </a>
            <a target='_blank' href="https://www.instagram.com/arouna_ak/"> <img src={insta}  /> </a>
            <a target='_blank' href="https://github.com/arounaj"> <img src={git}  /> </a>
        </div>
    )
}