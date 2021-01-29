import {useLayoutEffect, useState} from "react/cjs/react.production.min";
import Button from 'react-bootstrap/Button';
function Numpad(props) {

    const setNumber = (e) => {
        props.setResult(props.result + e.target.textContent);
    }
    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];
    return (
        <div className="Numpad">
            {elements.map((value, index) => {
                return <Button variant="primary"
                               key={index}
                               className="Item"
                               onClick={(e) => setNumber(e,1)}>{''+value}</Button>
            })}
        </div>
    );
}


export default Numpad;
