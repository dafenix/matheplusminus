import React, {useEffect, useState} from 'react';
import lemming from './lemmling_Cartoon_dog.svg'
import Button from "react-bootstrap/Button";
import {useMultiAudio} from "./MultiPlayer";
function Splash(props) {
    //const [, toggle] = useMultiAudio([""]);

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
