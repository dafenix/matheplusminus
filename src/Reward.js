import React, {useEffect, useState} from 'react';
import lemming from "./lemmling_Cartoon_dog.svg";
import glasses from "./glasses.svg";
import mouth from "./mouth.svg";
import Dog from "./Dog";
import Giraffe from "./Giraffe";
import GiraffeItem from "./lemmling-Cartoon-giraffe.svg";
import {Badge, ProgressBar} from "react-bootstrap";
import {useLocalStorage} from "./useLocalStorage";
import {useHistory} from "react-router-dom";

function Reward(props) {
    const [optionSelected, setOptionSelected] = useState(false);
    const history = useHistory();

    const [rewards, setRewards] = useLocalStorage('rewards',
        {
            gangster: false,
            smile: false,
            giraffe: false,
            roundCompleted: null
        });

    const selectReward = (name, reward) => {
        let rewardsNew = {...rewards};
        if (reward) {
            setOptionSelected(true);
            rewardsNew["roundCompleted"] = false;
        }
        rewardsNew[name] = reward;

        setRewards(rewardsNew);
    }

    return (
        <div className="reward">

            <Dog smile={rewards.smile} gangster={rewards.gangster}/>
            {rewards.giraffe && <Giraffe/>}
            <div style={{flexBasis: "100%", height: 0}}></div>
            {rewards && rewards.roundCompleted === true && (history.location.state && history.location.state.roundCompleted === true) && <div>
                <div className="rewardItems">
                    <img className="rewardItem" src={glasses} onClick={() => selectReward('gangster', !rewards.gangster) /*setRewards({...rewards, gangster: !rewards.gangster})*/}/>
                    <img className="rewardItem" src={mouth} onClick={() => selectReward('smile', !rewards.smile)}/>
                    <img className="rewardItem" src={GiraffeItem} onClick={() => selectReward('giraffe', !rewards.giraffe)}/>
                </div>

            </div>}
        </div>
    );


}


export default Reward;
