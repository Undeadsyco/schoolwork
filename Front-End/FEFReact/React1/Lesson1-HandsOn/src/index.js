import React from 'react';
import ReactDOM from 'react-dom';

const favColors = React.createElement('ul',{},
    React.createElement('li',{},"Red"),
    React.createElement('li',{},"Purple"),
    React.createElement('li',{},"Blue")
);
const favMusic = React.createElement('ul',{},
    React.createElement('li',{},"Rock Music"),
    React.createElement('li',{},"Rap Music"),
    React.createElement('li',{},"Dubstep Music")
);
const favFood = React.createElement('ul',{},
    React.createElement('li',{},"Hispanic Foods"),
    React.createElement('li',{},"Italian Foods"),
    React.createElement('li',{},"Chinese Foods")
);
const favSite = React.createElement('ul',{},
    React.createElement('li',{},
        React.createElement('a',{href:'https://github.com/'},"https://github.com/")
    ),
    React.createElement('li',{},
        React.createElement('a',{href: 'http://tolweb.org/tree/'},"http://tolweb.org/tree")
    ),
    React.createElement('li',{},
        React.createElement('a',{href: 'https://www.w3schools.com/'},"https://www.w3schools.com")
    )
);

ReactDOM.render(
    React.createElement('div',{},
        React.createElement('h1',{},"My Favorite Things"),
        React.createElement('ul',{},
            React.createElement('li',{className: 'FavoriteColors'},"Favorite Colors", favColors),
            React.createElement('li',{className: 'FavoriteMusic'},"Favorite Music", favMusic),
            React.createElement('li',{className: 'FavoriteFoods'},"Favorite Food", favFood),
            React.createElement('li',{className: 'FavoriteWebsites'},"Favorite Websites", favSite),
        )
    ),
    document.getElementById("root")
);

// ReactDOM.render(
//     <div>
//         <h1>My Favorite Things</h1>
//         <ul>
//             <li>Favorite Colors</li>
//             <ol>
//                 <li>Red</li>
//                 <li>Purple</li>
//                 <li>Blue</li>
//             </ol>
//             <li>Favorite Music</li>
//             <ol>
//                 <li>Rock Music</li>
//                 <li>Rap Music</li>
//                 <li>Dubstep Music</li>
//             </ol>
//             <li>Favorite Foods</li>
//             <ol>
//                 <li>Hispanic Foods</li>
//                 <li>Italian Foods</li>
//                 <li>Chinese Foods</li>
//             </ol>
//             <li>Favorite Websites</li>
//             <ol>
//                 <li><a href="https://github.com/">https://github.com</a></li>
//                 <li><a href="http://tolweb.org/tree/">http://tolweb.org/tree</a></li>
//                 <li><a href="https://www.w3schools.com/">https://www.w3schools.com/</a></li>
//             </ol>
//         </ul>
//     </div>,
//     document.getElementById('root')
// )