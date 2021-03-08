import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


// for(let i=0; i < grocerys.length; i++){
//     listGrocery.push(<li key={i}>{grocery[i]}</li>);
// };

const App = props => {
    const grocerys=[
        {name: "bread", price: 2.35},
        {name: "milk", price: 2.00},
        {name: "eggs", price: 3.15},
        {name: "tea", price: 4.00}
    ];
    const user={
        name: "George Bailey",
        address: "1122 Drafty House",
        city: "Bedford Falls",
        state: "New York",
        zip: 13148
    };
    
    return(
        <div>
            <List grocerys={grocerys} />
            <User person={user} items="Boots, Tie, Socks" amount={100} />
            <Employee name="Elizabeth" age={27} position='Sales Manager'/>
            <Employee name="Michael" age={20} />
        </div>
    )
};

const List = props => {
    const listGrocery=props.grocerys.map((grocery, index) => 
        <li key={index}>{grocery.name}: {grocery.price}</li>
    
    
        )
    return <ul>{listGrocery}</ul>
};

const User = props =>(
    <ul>
        <li>Name: {props.person.name}</li>
        <ul>
            <li>Address: {props.person.address}</li>
            <li>City: {props.person.city}</li>
            <li>State: {props.person.state}</li>
            <li>Zip: {props.person.zip}</li>
        </ul>
        <li>Items: {props.items}</li>
        <li>Paid: {String(props.paid)}</li>
        <li>Amount: {props.amount}</li>
        <li>Shipped: {String(props.shipped)}</li>
    </ul>
)

User.propTypes={
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zip: PropTypes.number.isRequired
    }),
    items: PropTypes.string.isRequired,
    paid: PropTypes.bool,
    amount: PropTypes.number.isRequired,
    shipped: PropTypes.bool
}

User.defaultProps={
    paid: false,
    shipped: false
}

const Employee=props=>(
    <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.position}</li>
    </ul>
);

Employee.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    position: PropTypes.string
}

Employee.defaultProps = {
    position: "Employee"
}

ReactDOM.render(<App />,document.getElementById('root'))