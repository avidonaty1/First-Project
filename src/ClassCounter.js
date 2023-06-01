import React, {Component} from 'react';


    class ClassCounter extends React.Component {
        constructor() {
            super();
            this.state = {counter: 0};
        }

    render() {
        return (
            <div>
                <button onClick={this.Incrementer}>Increment</button>
                <button onClick={this.Decrementer}>Decrement</button>
                <p>Count: {this.state.counter}</p>
            </div>
        )
    }

    Incrementer = () =>  {
        this.setState({counter: this.state.counter + 1})
    }

    Decrementer = () => {
        this.setState({counter: this.state.counter - 1})
    }
    
}

export default ClassCounter;