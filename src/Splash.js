import React, {useEffect, useState} from 'react';
import lemming from './lemmling_Cartoon_dog.svg'
import Button from "react-bootstrap/Button";
import MultiPlayer, {useMultiAudio} from "./MultiPlayer";
function Splash(props) {
    const [players, toggle] = useMultiAudio(["https://soundimage.org/wp-content/uploads/2020/09/Bass-Invaders.mp3"]);

    useEffect(() => {

    }, []);

    return (props.visible &&
        <div className="splash">
           <img src={lemming} className="splashImage rotating"/>
           <h1>Willkommen zum lustigen Plus- und Minusrechnen mit Waui</h1>
            <Button variant="primary" block
                    onClick={() => {
                        //toggle(0)();
                        props.setVisible(false);
                    }}>Lass uns loslegen!</Button>

        </div>
    );


}


export default Splash;
