import React from 'react';
import { render } from 'react-dom';

const API ='https://api.github.com/users'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName: 'Undeadsyco',
            name: '',
            avater: '',
            location: '',
            repos: '',
            followers: '',
            following: '',
            homeUrl: '',
            notFound: ''
        };
    };

    fetchProfile(userName){
        let url = `${API}/${userName}`;
        fetch(url)
            .then((res)=>res.json())
            .then((data)=> {
                this.setState({
                    userName: data.login,
                    name: data.name,
                    avatar: data.avatar_url,
                    location: data.location,
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    homeUrl: data.html_url,
                    notFound: data.message
                });
            })
            .catch(error=>console.log('Oops, there is a problem'))
    };

    componentDidMount(){
        this.fetchProfile(this.state.userName)
    }

    render(){
        return(
            <div>
                <section id="card">
                    <Profile data={this.state}/>
                </section>
            </div>
        )
    }
};

class Profile extends React.Component{
    render(){
        let data = this.props.data;
        let followers=`${data.homeUrl}/followers`
        let repos=`${data.homeUrl}?tab=repositories`;
        let following=`${data.homeUrl}/following`;

        return(
            <section className="github-profile">
                <div className="github-profile_info">
                    <a 
                        href={data.homeUrl}
                        target="_blank"
                        title={data.name || data.userName}
                    >
                        <img src={data.avatar} alt={data.userName}/>
                    </a>
                    <h2>
                        <a href={data.homeUrl} target="_blank">
                            {data.name || data.userName}
                        </a>
                    </h2>
                </div>
                <div className="github-profile_state">
                    <ul>
                        <li>
                            <a href={followers} target="_blank" title="Number Of Followers">
                                <i>{data.followers}</i>
                                <span>Followers</span>
                            </a>
                        </li>
                        <li>
                            <a href={repos} target="_blank" title="Number Of Repositories">
                                <i>{data.repos}</i>
                                <span>Repositories</span>
                            </a>
                        </li>
                        <li>
                            <a href={following} target="_blank" title="Number Of Following">
                                <i>{data.following}</i>
                                <span>Following</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

render(<App/>, document.getElementById('root'));