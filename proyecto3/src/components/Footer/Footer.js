import React from "react";
import "../Footer/footer.css"

function Footer() {
    return (
        <footer>
            <ul className="team">
                <li>Santiago Jordan</li>
                <li>Tomás Jarsun</li>
            </ul>

            <div className="redes">
                <img src="../images/instagramLogo.webp" alt="fotosRedes"></img>
                <img src="../images/logotwitter.png" alt="fotosRedes"></img>
                <img src="../images/logofacebook.png" alt="fotosRedes"></img>
            </div>
        </footer>
    );
}

export default Footer;