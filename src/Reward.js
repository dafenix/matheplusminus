import React, {useEffect, useState} from 'react';
import lemming from "./lemmling_Cartoon_dog.svg";
import glasses from "./glasses.svg";
import mouth from "./mouth.svg";
import Dog from "./Dog";
import Giraffe from "./Giraffe";
import GiraffeItem from "./lemmling-Cartoon-giraffe.svg";
import {Badge, ProgressBar} from "react-bootstrap";

function Reward(props) {
    const [gangster, setGlasses] = useState(false);
    const [smile, setMouth] = useState(false);
    const [giraffe, setGiraffe] = useState(false);

    return (
        <div className="reward">

            {/*<img src={lemming} className="splashImage"/>*/}
            <Dog smile={smile} gangster={gangster}/>
            {giraffe && <Giraffe/>}
            <div style={{flexBasis: "100%", height: 0}}></div>
            <div>
                <div className="rewardItems">
                    <img className="rewardItem" src={glasses} onClick={() => setGlasses(!gangster)}/>
                    <img className="rewardItem" src={mouth} onClick={() => setMouth(!smile)}/>
                    <img className="rewardItem" src={GiraffeItem} onClick={() => setGiraffe(!giraffe)}/>
                </div>

            </div>
        </div>
    );


}


export default Reward;
