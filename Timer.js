import React, { Component } from 'react';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: true
        };
    }

    componentDidMount() {
        this.i = setInterval(() => this.setState({ date: new Date() }), 1000);
    }
    handleClick = () => this.setState({ isToggleOn: !this.state.isToggleOn });


    handleTimeChange = () => {
        const { date, isToggleOn } = this.state;
        return isToggleOn ? date.toLocaleTimeString() : date.toLocaleDateString()
    }


    render() {
        return (
            <div><p>Click on the button to see Date or Time<br/> 
             {this.handleTimeChange()}</p>
                <hr />
                <div>
                    <button onClick={this.handleClick}>{this.state.isToggleOn ? 'Show Date' : 'Show Time'}</button>
                </div>
            </div>

        );
    }
}

export default Timer;
