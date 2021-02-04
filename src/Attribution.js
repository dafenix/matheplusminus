import React, {useContext, useEffect, useState} from 'react';


function Attribution(props) {
    return (
        <div className="container-fluid">
            <h1>Attributions</h1>
            <h2>Sounds</h2>
            <ul>
                <li><a href="https://freesound.org/people/themusicalnomad/sounds/253887/">positive_beeps.wav</a> by <a href="https://freesound.org/people/themusicalnomad/">themusicalnomad</a> License: Creative Commons</li>
                <li><a href="https://freesound.org/people/Raclure/sounds/483598/">Wrong</a> by <a href="https://freesound.org/people/Raclure/">Raclure</a> License: Creative Commons</li>
                <li><a href="https://freesound.org/people/erkanozan/sounds/51743/">APPLAUSE.WAV</a> by <a href="https://freesound.org/people/erkanozan/">erkanozan</a> License: Creative Commons</li>
            </ul>
            <h2>Images</h2>
            <ul>
                <li>All images are from <a href="https://freesvg.org/">Source</a> by <a href="https://freesvg.org/by/OpenClipart">OpenClipart</a> License: Public Domain</li>
            </ul>
        </div>
    );
}


export default Attribution;
