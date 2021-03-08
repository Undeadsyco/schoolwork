import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, addAmount, change } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
          count={this.props.count} 
          numberOfTimes={this.props.numberOfTimes}
          addAmount={this.props.addAmount}
          onIncrement={this.props.onIncrement} 
          onDecrement={this.props.onDecrement} 
          onAddAmount={this.props.onAddAmount}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch, state) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onAddAmount: () => dispatch(addAmount()),
    onChange: (addAmount) => dispatch(change(addAmount))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numberOfTimes: state.numberOfTimes,
      addAmount: state.addAmount
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);