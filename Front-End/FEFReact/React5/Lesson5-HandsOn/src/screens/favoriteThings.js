import React from 'react';
import { BrowserRouter as Router, Route, Link,} from 'react-router-dom';
import Things from './things'

const FavoriteThings =({match})=>(
    <div>
        <h1>FavoriteThings</h1>
        <ul>
            <li><Link to={`${match.url}/Mozda-RX7`}>Favorite Car</Link></li>
            <li><Link to={`${match.url}/Hispanic-Foods`}>Favorite Foods</Link></li>
            <li><Link to={`${match.url}/The-Nightmare-Before-Christmas`}>Favorite Movie</Link></li>
        </ul>
        <Route path={`${match.url}/:thingsId`} component={Things}/>
        <Route exact path={match.url} render={()=> <h3>Please select to see favorite thing</h3>}/>
    </div>
);

export default FavoriteThings;