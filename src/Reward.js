import React, {useEffect, useState} from 'react';
import lemming from "./lemmling_Cartoon_dog.svg";
import glasses from "./glasses.svg";
import mouth from "./mouth.svg";
import Dog from "./Dog";
import Giraffe from "./Giraffe";
import GiraffeItem from "./lemmling-Cartoon-giraffe.svg";
import {Badge, ProgressBar} from "react-bootstrap";
import {useLocalStorage} from "./useLocalStorage";

function Reward(props) {
    const [gangster, setGlasses] = useState(false);
    const [smile, setMouth] = useState(false);
    const [giraffe, setGiraffe] = useState(false);

    const [rewards, setRewards] = useLocalStorage('rewards',
        {
            gangster: false,
            smile: false,
            giraffe: false
        });

    return (
        <div className="reward">

            <Dog smile={rewards.smile} gangster={rewards.gangster}/>
            {rewards.giraffe && <Giraffe/>}
            <div style={{flexBasis: "100%", height: 0}}></div>
            <div>
                <div className="rewardItems">
                    <img className="rewardItem" src={glasses} onClick={() => setRewards({...rewards, gangster: !rewards.gangster})}/>
                    <img className="rewardItem" src={mouth} onClick={() => setRewards({...rewards, smile: !rewards.smile})}/>
                    <img className="rewardItem" src={GiraffeItem} onClick={() => setRewards({...rewards, giraffe: !rewards.giraffe})}/>
                </div>

            </div>
        </div>
    );


}


export default Reward;
