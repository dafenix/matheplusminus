import React, {useContext, useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {useLocalStorage} from "./useLocalStorage";


function Options(props) {
    const [op, setMode] = useLocalStorage('mode', props.options[0]);
    return (
        <div className="Options">
            <Form>
                {props.options && props.options.map((option, index) => (
                    <div key={'radio' + index} className="mb-3">
                        <Form.Check
                            type={'radio'}
                            label={option.description}
                            name={"option"}
                            checked={option.min === op.min && option.max === op.max}
                            onChange={() => { setMode(option)
                            }}
                        />

                    </div>

                ))}
            </Form>
        </div>
    );


}


export default Options;
