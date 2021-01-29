import React, {useEffect, useState} from 'react';
import lemming from './lemmling_Cartoon_dog.svg'
import Button from "react-bootstrap/Button";
import MultiPlayer, {useMultiAudio} from "./MultiPlayer";
function Status(props) {
    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];
    const colors = ["black", "lightgreen", "red"];
    return (
        <div className="status">
            {elements.map((value, index) => {
                let color = colors[0];
                if (props.results && props.results.length > index) {
                    console.log('xxx',props.results);
                    color = props.results[index] ? colors[1] : props.results[index] === undefined ? colors[0] : colors[2];
                }
                return <i key={index} className="fa fa-circle" aria-hidden="true" style={{color: color, fontSize: "30px", marginLeft: "5px"}}></i>
            })}
        </div>
    );


}


export default Status;
