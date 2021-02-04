import React, {useEffect, useState} from 'react';
import lemming from './svgs/lemmling_Cartoon_dog.svg'
import Button from "react-bootstrap/Button";
import {useMultiAudio} from "./MultiPlayer";
//import {sounds} from "./Sounds";
import {useLocalStorage} from "./useLocalStorage";
function Splash(props) {
    //const [, toggle] = useMultiAudio([sounds[0]]);
    const [,setSounds] = useLocalStorage('sounds',null);

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
