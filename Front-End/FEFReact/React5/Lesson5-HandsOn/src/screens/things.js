import React from 'react';

const Things =({match})=>(
    <div>
        <h1>{match.params.thingsId}</h1>
    </div>
);

export default Things;