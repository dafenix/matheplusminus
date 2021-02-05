import React, {useEffect, useState} from 'react';
function Status(props) {
    const colors = ["black", "lightgreen", "red"];
    return (
        <div className="status">
            {props.excercises && props.excercises.map((value, index) => {
                let color = colors[0];
                const ex = props.excercises[index];
                if (ex.solved === undefined) {
                    color = colors[0];
                } else if (ex.solved === false) {
                    color = colors[2];
                }
                else if (ex.solved === true) {
                    color = colors[1];
                }
                return <i key={index} className="fa fa-circle" aria-hidden="true" style={{color: color, fontSize: "30px", marginLeft: "5px"}}></i>
            })}
        </div>
    );


}


export default Status;
