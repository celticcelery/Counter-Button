'use strict'

class CounterButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {counter: 0};

        this.incrementButton = this.incrementButton.bind(this);
        this.decrementButton = this.decrementButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
    }

    incrementButton(){
        this.setState( {
            counter: this.state.counter + 1
        });
    }

    decrementButton(){
        this.setState( {
            counter: this.state.counter - 1
        });
    }

    resetButton(){
        this.setState({
            counter: 0
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Counter {this.state.counter}
                </h1>
                <button onClick={this.incrementButton}>
                    Increment
                </button>
                <button onClick={this.decrementButton}>
                    Decrement
                </button>
                <button onClick={this.resetButton}>
                    Reset
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <CounterButton/>,
    document.getElementById('counter_button')
);
