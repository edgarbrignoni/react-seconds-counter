//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';
import './icons.js';

//render your react application
var seconds = 1109;

setInterval(function(){ 
    
    seconds--;
    if (seconds == 0) {
        seconds = 1109;
        alert('SYSTEM FAILURE');
        window.location.replace("https://edgarbrignoni.github.io/d0919-matrix-digital-rain/");
    }

    ReactDOM.render(
        <div>
            <SecondsCounter
                seconds={seconds}
            />
        </div>
        ,
        document.querySelector('#app')
    );

}, 10);


function SecondsCounter(props) {
    
    let digit4 = Math.floor(props.seconds / 1000) % 10;
    let digit3 = Math.floor(props.seconds / 100) % 10;
    let digit2 = Math.floor(props.seconds / 10) % 10;
    let digit1 = Math.floor(props.seconds / 1) % 10;
    
    
    return (
        <div className="containter">
            <div className="row">
                <div className="col-sm-8 col-md-4 mx-auto mt-5 alert alert-secondary">
                    <div className="container">
                        <div className="row">
                            <div className="col-1 mx-auto"><i className="far fa-clock"></i></div>
                            <div className="col-1 mx-auto">{digit4}</div>
                            <div className="col-1 mx-auto">{digit3}</div>
                            <div className="col-1 mx-auto"><strong>:</strong></div>
                            <div className="col-1 mx-auto">{digit2}</div>
                            <div className="col-1 mx-auto">{digit1}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number
};