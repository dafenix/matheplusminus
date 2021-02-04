import Canvas from "./Canvas";
import React, {useContext, useEffect, useRef, useState} from 'react';
import './App.css';

import Numpad from "./Numpad";
import Button from "react-bootstrap/Button";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Splash from "./Splash";
import SolvedModal from "./SolvedMessageBox";
import Status from "./Status";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, useHistory
} from "react-router-dom";
import Reward from "./Reward";
import Options, {options} from "./Options";
import {useLocalStorage} from "./useLocalStorage";
import {useMultiAudio} from "./MultiPlayer";
import Attribution from "./Attribution";
//import {sounds} from "./Sounds";

function App() {
    const history = useHistory();
    //const [, toggle] = useMultiAudio(sounds);


    const options = [
        {min: 1, max: 10, description: 'Zahlen von 1 bis 10', isDefault: true},
        {min: 1, max: 20, description: 'Zahlen von 1 bis 20', isDefault: false},
        {min: 1, max: 50, description: 'Zahlen von 1 bis 50', isDefault: false},
        {min: 1, max: 100, description: 'Zahlen von 1 bis 100', isDefault: false},
    ];

    const [result, setResult] = useState('');
    const validAnswerAudio = useRef(null);
    const wrongAnswerAudio = useRef(null);
    const roundCompletedAudio = useRef(null);
    const [excercise, setExcercise] = useState('');
    const [excercises, setExcercises] = useState([]);
    const [solvedValid, setSolvedValid] = useState(false);
    const [splashVisible, setSplash] = useState(true);
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);
    const handleClose = () => setShow(false);
    const [mode,] = useLocalStorage('mode', options[0]);
    const [rewards,setRewards] = useLocalStorage('rewards', {
        gangster: false,
        smile: false,
        giraffe: false,
        sheep: false,
        hippo: false,
        tiger: false,
        elephant: false,
        goat: false,
        background: true,
        roundCompleted: null
    });

    useEffect(() => {
        // We only want to load the sound when root domain was called
        if (history.location.pathname === "/") {
            fetch('./Sounds.json').then(function (response){
                return response.json();
            }).then(function (data){
                validAnswerAudio.current.src = data.correctAnswer;
                wrongAnswerAudio.current.src = data.incorrectAnswer;
                roundCompletedAudio.current.src = data.roundCompleted;
            });
        }

        if (!splashVisible) {
            const excercises = buildExcercises();
            setExcercises(excercises);
            setExcercise(excercises[0]);
        }
    }, [splashVisible, mode]);
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

    const buildPlus = (max, maxCalcs, random) => {
        let left = 0;
        let right = 0;
        let calcs = 0;

        do {
            left = getRandomInt(1, max);
            right = getRandomInt(1, max);
            calcs++;
        } while (left + right > max || calcs >= maxCalcs);

        return {
            left: left,
            right: right,
            id: left + '+' + right,
            type: '+',
            solved: undefined,
            hide: random % 3 === 0 ? 0 : random % 2 === 0 ? 1 : 2,
            render: function (result) {
                const l = this.hide === 0 ? result.padEnd(('00').length, '_') : left;
                const r = this.hide === 1 ? result.padEnd(('00').length, '_') : right;
                const res = this.hide === 2 ? result.padEnd(('00').length, '_') : this.calc() + '';
                return l + ' ' + this.type + ' ' + r + ' = ' + res;
            },
            calc: function () {
                return left + right;
            },
            pseudoCalc: function (result) {
                const resultAsInt = parseInt(result);
                const l = this.hide === 0 ? resultAsInt : parseInt(left);
                const r = this.hide === 1 ? resultAsInt : parseInt(right);
                const res = this.hide === 2 ? resultAsInt : parseInt(l) + parseInt(r);
                console.log('pseudoCalc', {l, r, res});
                return l === left && r === right && this.calc() === res;
            }
        }
    }

    const buildMinus = (max, maxCalcs, random) => {
        let left = 0;
        let right = 0;
        let calcs = 0;

        do {
            left = getRandomInt(1, max);
            right = getRandomInt(1, left);
            calcs++;
        } while (left - right === 0 || calcs >= maxCalcs);

        return {
            left: left,
            right: right,
            id: left + '-' + right,
            type: '-',
            solved: undefined,
            hide: random % 3 === 0 ? 0 : random % 2 === 0 ? 1 : 2,
            render: function (result) {
                const l = this.hide === 0 ? result.padEnd(('00').length, '_') : left;
                const r = this.hide === 1 ? result.padEnd(('00').length, '_') : right;
                const res = this.hide === 2 ? result.padEnd(('00').length, '_') : this.calc() + '';
                return l + ' ' + this.type + ' ' + r + ' = ' + res;
            },
            calc: function () {
                return left - right;
            },
            pseudoCalc: function (result) {
                const resultAsInt = parseInt(result);
                const l = this.hide === 0 ? resultAsInt : parseInt(left);
                const r = this.hide === 1 ? resultAsInt : parseInt(right);
                const res = this.hide === 2 ? resultAsInt : parseInt(l) - parseInt(r);
                console.log('pseudoCalc', {l, r, res});
                return l === left && r === right && this.calc() === res;
            }
        }
    }

    const buildExcercise = () => {
        const max = mode.max;
        const maxCalcs = 20;
        const type = getRandomInt(0, max);
        return type % 2 === 0 ? buildPlus(max, maxCalcs, type) : buildMinus(max, maxCalcs, type);
    }

    const buildExcercises = () => {
        const max = 1;
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

        if (excercise.pseudoCalc(result)) {
            setSolvedValid(true);
            excercise.solved = true;
            validAnswerAudio.current.play();
            //toggle(0)();
            //setShow(true);
        } else {
            setSolvedValid(false);
            excercise.solved = false;
            wrongAnswerAudio.current.play();
            //toggle(1)();
            setShow(true);
        }

        if (excercises.indexOf(excercise) === excercises.length - 1) {
            setOnlyUnsolved(true);
            console.log('index', index);
            var unsolved = excercises.filter(e => e.solved === false);
            if (unsolved.length > 0) {
                const nextUnsolved = unsolved[0];
                let newIndex = excercises.indexOf(nextUnsolved);
                setIndex(newIndex);
                setExcercise(nextUnsolved);
                setResult('');
                return;
            }
        }

        if (excercises.filter(e => e.solved === true).length === excercises.length) {
            console.log('fertig',rewards);
            roundCompletedAudio.current.play();
            setRewards({...rewards, roundCompleted: true});
            //toggle(2)();
            setTimeout(function () {
                history.push("/reward", {roundCompleted: true, rewards: rewards});
            }, 3000);


        }

        setResult('');
        let newIndex = index + 1;
        if (onlyUnsolved) {
            var unsolved = excercises.filter(e => e.solved === false);
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
                <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
                    <Navbar.Brand as={Link} to="/" href="#home">Addiere und Subtrahiere</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" onSelect={() => {
                            setResult('');
                            setSplash(true);
                        }}>Home</Nav.Link>
                        <Nav.Link href="#options" as={Link} to="/options">Einstellungen</Nav.Link>
                        <Nav.Link href="#reward" as={Link} to="/reward">Belohnung</Nav.Link>
                        <Nav.Link href="#attribution" as={Link} to="/attribution">Attribution</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>


            <Switch>
                <Route path="/reward">
                    <Reward rewards={rewards}/>

                </Route>
                <Route path="/options">
                    <Options options={options}/>
                </Route>
                <Route path="/attribution">
                    <Attribution />
                </Route>

                <Route path="/">
                    <audio ref={validAnswerAudio} src="" preload="auto"></audio>
                    <audio ref={wrongAnswerAudio} src="" preload="auto"></audio>
                    <audio ref={roundCompletedAudio} src="" preload="auto"></audio>
                    <Status excercises={excercises}/>
                    <Splash visible={splashVisible} setVisible={setSplash}/>

                    {!splashVisible && <div>
                        <Canvas className="Canvas" excercise={excercise} result={result}
                                placeholder={'00 + 00 = '}/>
                        <div className="solveButtonGroup">
                            <Button variant="danger"
                                    className="Item"
                                    onClick={() => setResult('')}>Entfernen</Button>
                            <Button variant="success"
                                    className="Item"
                                    onClick={() => solve()}>Lösen</Button>
                        </div>
                        <Numpad result={result} setResult={setResult}/>


                    </div>}
                    <SolvedModal ok={solvedValid} show={show} handleClose={() => setShow(false)}/>
                </Route>
            </Switch>
        </div>
    );


}


export default withRouter(App);
