import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div className="flower">
        <h1>Hello World</h1>
    </div>,
    document.getElementById('root')
)

const applePrice = React.createElement('li',{},'$1.00 per pound');
const orangePrice = React.createElement('li',{},'$0.70 per pound')
const mangoPrice = React.createElement('li',{},'$2.00 per pound')

const apples =  React.createElement('ul',{},applePrice);
const oranges = React.createElement('ul',{},orangePrice);
const mangos =  React.createElement('ul',{},mangoPrice)

ReactDOM.render(
    React.createElement(
        'div', 
        {}, 
        React.createElement('h1',{className: 'flowers'},'Hello World'),
        React.createElement('a',{href: "https://www.google.com"},'Take me to google'),
        React.createElement(
            'ul',
            {},
            React.createElement('li',{},'Apples',apples),
            React.createElement('li',{},'Oranges',oranges),
            React.createElement('li',{},'mangos',mangos)
        )
    ),
    document.getElementById("root")
);
