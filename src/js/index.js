// import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

// include your index.scss file into the bundle
import '../styles/index.scss';

// import your own components
import { TrafficLight } from './components/TrafficLight.jsx';

// render your react application
ReactDOM.render(
    <TrafficLight />, 
    document.querySelector('#app')
);
