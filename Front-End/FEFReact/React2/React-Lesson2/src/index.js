import React from 'react';
import ReactDOM from 'react-dom';

const item1 = "Apples";
const item1Price = "$1.00/lb";
const item2 = "Oranges";
const item2Price = "$.70/lb";
const item3 = "Mangos";
const item3Price = "$2.00/lb"

const shoppingList = (item1, item2, item3) => {
    return (
        <ul>
            <li>{item1}</li>
            <ul>
                <li>{item1Price}</li>
            </ul>
            <li>{item2}</li>
            <ul>
                <li>{item2Price}</li>
            </ul>
            <li>{item3}</li>
            <ul>
                <li>{item3Price}</li>
            </ul>
        </ul>
    )
}

ReactDOM.render(
    <div id="ID">
        <h1 className="className">Hello World</h1>
        {shoppingList(item1, item2, item3)}
    </div>,
    document.getElementById('root')
);