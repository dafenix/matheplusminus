import React, {useContext, useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {useLocalStorage} from "./useLocalStorage";
import Button from "react-bootstrap/Button";


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
                            onChange={() => {
                                setMode(option)
                            }}
                        />

                    </div>

                ))}
                <Button variant="danger"
                        className="Item"
                        onClick={() => {
                            if (window.confirm('Wenn du fortfährst verlierst du alle Belohnungen!')) {
                                window.localStorage.clear();
                                window.location.reload(false);
                            }
                        }}>Alles zurücksetzen</Button>
            </Form>
        </div>
    );


}


export default Options;
