import React, {useEffect, useState} from 'react';
import lemming from './svgs/lemmling_Cartoon_dog.svg'
import Button from "react-bootstrap/Button";
import {useLocalStorage} from "./useLocalStorage";
function Splash(props) {
    const [,setSounds] = useLocalStorage('sounds',null);


    return (props.visible &&
        <div className="splash">
           <img src={lemming} className="splashImage rotating"/>
           <h1>Willkommen zum lustigen Plus- und Minusrechnen mit Waui</h1>
            <Button variant="primary" block
                    onClick={() => {
                        props.setVisible(false);
                    }}>Lass uns loslegen!</Button>

        </div>
    );


}


export default Splash;
