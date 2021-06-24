import React from 'react';

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			theValue: null
		};
	}

    render() {
        // console.log(this.state);

        let redSelected = '';
        let yellowSelected = '';
        let greenSelected = '';
        if (this.state.theValue == 'red') {
            redSelected = 'selected';
        } else if (this.state.theValue == 'yellow') {
            yellowSelected = 'selected';
        } else if (this.state.theValue == 'green') {
            greenSelected = 'selected';
        } else {
            redSelected = yellowSelected = greenSelected = '';
        }

        return (
            <div>
                <div id="trafficTop" onClick={() => this.setState({theValue: 'reset'})}/>
                <div id="container">
                    <div className={'red light ' + redSelected} onClick={() => this.setState({theValue: 'red'})} />
                    <div className={'yellow light ' + yellowSelected} onClick={() => this.setState({theValue: 'yellow'})} />
                    <div className={'green light ' + greenSelected} onClick={() => this.setState({theValue: 'green'})} />
                </div>
            </div>
        );
    }
}
