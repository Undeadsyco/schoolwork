import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,} from 'react-router-dom';
import Home from './screens/home';
import About from './screens/about';
import FavoriteThings from './screens/favoriteThings';

const App =()=>(
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/favoriteThings">Favorite Things</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/favoriteThings" component={FavoriteThings} />
        </div>
    </Router>
);

ReactDOM.render(<App/>, document.getElementById('root'))