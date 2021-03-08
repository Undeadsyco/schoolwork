import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/home';
import About from './screens/about';
import Topics from './screens/topics';

const Index =({pathname})=>{
    switch(pathname){
        case '/About':
            return <About />;
        case '/Topics':
            return <Topics />;
        default:
            return <Home />
    };
};

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'))

window.addEventListener('popstate', ()=> pathname = window.location.pathname)