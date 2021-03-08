import React from "react";

const Search = ({ repos, searchText, onSearchTextChanged, onSearch }) => {
    console.log(repos)
    let repoLinks = (
        <ul>
            {repos.map(repo=> <li key={repo.id}><a href={repo.url} target='_blank'>{repo.name}</a></li>)}
        </ul>
    );

    return (
        <div>
            <p>Enter a repo name to find all repos: </p><hr/>
            <input onChange={(event)=> onSearchTextChanged(event.target.value)}/>
            <button onClick={()=> onSearch(searchText)}>Search Github</button>
            <div>{repoLinks}</div>
        </div>
    )
}



export default Search;


