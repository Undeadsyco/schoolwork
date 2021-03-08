import React from 'react';

const Counter = ({ count, numberOfTimes, addAmount, onDecrement, onIncrement, onAddAmount, onChange }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <h3>Times the +/- buttons have been pressed: <span>{numberOfTimes}</span></h3>
          <input 
            type='number'
            onChange={event => (onChange(event.target.value))}
          />
          <button onClick={onAddAmount.bind(this)}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;