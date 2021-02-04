import React, {useEffect, useRef, useState} from 'react';
import lemming from "./svgs/lemmling_Cartoon_dog.svg";
import glasses from "./svgs/glasses.svg";
import mouth from "./svgs/mouth.svg";
import GiraffeItem from "./svgs/lemmling-Cartoon-giraffe.svg";
import SheepItem from "./svgs/lemmling-Cartoon-sheep.svg";
import HippoItem from "./svgs/StudioFibonacci-Cartoon-hippo.svg";
import TigerItem from "./svgs/Cartoon-tiger.svg";
import GoatItem from "./svgs/lemmling-Cartoon-goat.svg";
import ElephantItem from "./svgs/lemmling-Cartoon-elephant.svg";
import BackgroundItem from "./svgs/redbarn-01.svg";
import {Badge, ProgressBar} from "react-bootstrap";
import {useLocalStorage} from "./useLocalStorage";
import {useHistory, useLocation} from "react-router-dom";
import AnimalFamily from "./AnimalFamily";

function Reward(props) {
    const [optionSelected, setOptionSelected] = useState(false);
    const history = useHistory();
    const {state} = useLocation();
    const [rewards, setRewards] = useLocalStorage('rewards',
        props.rewards ? props.rewards : state.rewards);

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
            <AnimalFamily background={rewards.background ? 1 : 0}
                          gangster={rewards.gangster ? 1 : 0}
                          smile={rewards.smile ? 1 : 0}
                          giraffe={rewards.giraffe ? 1 : 0}
                          sheep={rewards.sheep ? 1 : 0}
                          hippo={rewards.hippo ? 1 : 0}
                          tiger={rewards.tiger ? 1 : 0}
                          elephant={rewards.elephant ? 1 : 0}
                          goat={rewards.goat ? 1 : 0}

            />
            {/*<Dog smile={rewards.smile} gangster={rewards.gangster}/>*/}
            {/*{rewards.giraffe && <Giraffe/>}*/}
            <div style={{flexBasis: "100%", height: 0}}></div>
            {rewards && rewards.roundCompleted === true && (history.location.state && history.location.state.roundCompleted === true) && <div>
                <div className="rewardItems">
                    <img className="rewardItem" src={glasses} onClick={() => selectReward('gangster', !rewards.gangster) /*setRewards({...rewards, gangster: !rewards.gangster})*/}/>
                    <img className="rewardItem" src={mouth} onClick={() => selectReward('smile', !rewards.smile)}/>
                    <img className="rewardItem" src={GiraffeItem} onClick={() => selectReward('giraffe', !rewards.giraffe)}/>
                    <img className="rewardItem" src={SheepItem} onClick={() => selectReward('sheep', !rewards.sheep)}/>
                    <img className="rewardItem" src={HippoItem} onClick={() => selectReward('hippo', !rewards.hippo)}/>
                    <img className="rewardItem" src={TigerItem} onClick={() => selectReward('tiger', !rewards.tiger)}/>
                    <img className="rewardItem" src={ElephantItem} onClick={() => selectReward('elephant', !rewards.elephant)}/>
                    <img className="rewardItem" src={GoatItem} onClick={() => selectReward('goat', !rewards.goat)}/>
                    {/*<img className="rewardItem" src={BackgroundItem} onClick={() => selectReward('background', !rewards.background)}/>*/}
                </div>

            </div>}
        </div>
    );


}


export default Reward;
