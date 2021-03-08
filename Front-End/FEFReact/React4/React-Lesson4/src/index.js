import React from 'react';
import ReactDOM from 'react-dom';

const App = props =>{
    return (
        <div>
            <Text />
            <BankAccount />
        </div>
    );
}

class BankAccount extends React.Component{
    constructor(props){
        super(props);
        this.state={
                accountBalance: 25.00,
                addAmount: 0
        };
    }

    increment(){
        this.setState({accountBalance: this.state.accountBalance + parseInt(this.state.addAmount)})
    }

    render(){
        return (
            <div>
                <h3>Account Balance: {this.state.accountBalance}</h3>
                <input type='number' 
                    onChange={event => this.setState({addAmount: event.target.value})}
                    value={this.state.addAmount} />
                <button onClick={this.increment.bind(this)}>Add</button>
            </div>
        );
    }
}

class Text extends React.Component{
    constructor(){
        super();
        this.state={
            text: "Hello World"
        }
    }

    update(event){
        this.setState({text: event.target.value})
    }

    render(){
        return(
            <div>
                <input type='text' onChange={this.update.bind(this)} />
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));