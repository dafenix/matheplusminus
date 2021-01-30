import Canvas from "./Canvas";
import React, {useEffect, useState} from 'react';
import './App.css';

import Numpad from "./Numpad";
import Button from "react-bootstrap/Button";
import {Nav, Navbar} from "react-bootstrap";
import Splash from "./Splash";
import SolvedModal from "./SolvedMessageBox";
import Status from "./Status";

function App() {

    const [result, setResult] = useState('');
    const [results, setResults] = useState([]);
    const [excercise, setExcercise] = useState('');
    const [excercises, setExcercises] = useState([]);
    const [solvedValid, setSolvedValid] = useState(false);
    const [splashVisible, setSplash] = useState(false);
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);

    const handleClose = () => setShow(false);
    useEffect(() => {
        if (!splashVisible) {
            const excercises = buildExcercises();
            setExcercises(excercises);
            setExcercise(excercises[0]);
        }
    }, [splashVisible]);
    /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const buildExcercise = () => {
        const max = 10;
        let left = 0;
        let right = 0;
        const maxCalcs = 20;
        let calcs = 0;
        do {
            left = getRandomInt(1, max);
            right = getRandomInt(1, max);
            calcs++;
        } while (left + right > max || calcs >= maxCalcs);

        return {
            left: left,
            right: right,
            id: left + '' + right,
            solved: false
        }
    }

    const buildExcercises = () => {
        const max = 10;
        let excercises = [];
        let ids = [];
        for (let i = 0; i < max; i++) {
            let current;
            do {
                current = buildExcercise();
            } while (ids.includes(current.id))
            excercises.push(current);
            ids.push(current.id);
        }
        return excercises;
    }

    const [onlyUnsolved, setOnlyUnsolved] = useState(false);
    const solve = () => {
        let expected = excercise.left + excercise.right;

        if (excercises.indexOf(excercise) === excercises.length - 1) {
            setOnlyUnsolved(true);
            console.log('index', index);
            var unsolved = excercises.filter(e => !e.solved);
            if (unsolved.length > 0 ){
                let newIndex = excercises.indexOf(unsolved[0]);
                setIndex(newIndex);
                setExcercise(unsolved[0]);
                setResult('');
                expected = unsolved[0].left + unsolved[0].right;
            }
        }

        if (parseInt(expected) === parseInt(result)) {
            setSolvedValid(true);
            excercise.solved = true;
            //setShow(true);
        } else {
            setSolvedValid(false);
            excercise.solved = false;
            setShow(true);
        }


        setResult('');
        let resultsCopy = results;
        resultsCopy[index] = parseInt(expected) === parseInt(result);
        setResults(resultsCopy);
        //setResults([...results, parseInt(expected) === parseInt(result)]);
        let newIndex = index + 1;
        if (onlyUnsolved) {
            var unsolved = excercises.filter(e => !e.solved);
            console.log('unsolvedX', unsolved);
            if (unsolved.length === 0) {
                return;
            }
            newIndex = excercises.indexOf(unsolved[0]);
        }
        if (newIndex > excercises.length - 1) {
            return;
        }
        setIndex(newIndex);
        setExcercise(excercises[newIndex]);

    }

    return (
        <div className="App">
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Addiere und Subtrahiere</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onSelect={() => {
                            setResult('');
                            setSplash(true);
                        }}>Home</Nav.Link>
                        <Nav.Link href="#features">Einstellungen</Nav.Link>
                    </Nav>
                </Navbar>
            </>
            <Status results={results}/>
            <Splash visible={splashVisible} setVisible={setSplash}/>

            {!splashVisible && <div>
                <Canvas className="Canvas" excercise={excercise} result={result} placeholder={'00 + 00 = '}/>
                <Numpad result={result} setResult={setResult}/>
                <Button variant="success" block
                        onClick={() => solve()}>Solve</Button>
                <Button variant="danger" block
                        onClick={() => setResult('')}>Clear</Button>
            </div>}
            <SolvedModal ok={solvedValid} show={show} handleClose={() => setShow(false)}/>
        </div>
    );


}


export default App;
