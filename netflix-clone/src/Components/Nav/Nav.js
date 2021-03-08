import React, {useEffect, useState} from 'react'
import "../Nav/Nav.css"

function Nav() {

    const [show, handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="http://pngimg.com/uploads/netflix/netflix_PNG32.png"
                alt="Netflix logo"
            />

            <img
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
