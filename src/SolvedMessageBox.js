import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";

function SolvedModal(props) {
    const titles = ["Hey Super!", "Schade das war leider nichts."];
    const bodies = ["Du hast die Aufgabe richtig gelöst! Weiter so!", "Mhm da scheint irgendetwas nicht zu stimmen. Versuche es später nochmal!"];
    const smilies = ["&#xf118;", "&#xf11a;"];
    const colors = ["lightgreen", "red"];

    const getItem = (map) => {
        const idx = props.ok ? 0 : 1;
        console.log('ok?',props.ok);
        return map[idx];
    }
    return (
        <Modal show={props.show} centered onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{getItem(titles)}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div style={{textAlign: "center"}}>
                    <p>{getItem(bodies)}</p>
                    <div className="fa modalicon" style={{fontSize: "60px", color: getItem(colors)}} dangerouslySetInnerHTML={{ __html: getItem(smilies)}}></div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>Weiter!</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SolvedModal;