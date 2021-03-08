import React from 'react';
import ReactDOM from 'react-dom';

const stateInfo = (state,population,captial) =>{
    return(
        <tr>
            <td>{state}</td>
            <td>{population}</td>
            <td>{captial}</td>
        </tr>
    );
};

ReactDOM.render(
    <table>
        <thead>
            <th>State</th>
            <th>Population</th>
            <th>Capital</th>
        </thead>
        <tbody>
            {stateInfo("Idaho","","Boise")}
            {stateInfo("Tennessee","6.651 million","Nashville")}
            {stateInfo("Maine","1.331 million","Agusta")}
            {stateInfo("Wisconsin","5.779 million","Madison")}
        </tbody>
    </table>,
    document.getElementById('root')
);