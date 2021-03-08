import React from 'react';
import { render } from 'react-dom';

let API = 'https://jsonplaceholder.typicode.com/photos';

class App extends React.Component{
  state={
    pictures: []
  }

  componentDidMount(){
    fetch(API)
      .then(responce => responce.json())
      .then(responce => {let pictures = responce.filter((i, index) => index < 50)
        this.setState({ pictures: pictures })
      })
  }

  render(){
    return(
      <div>
        {this.state.pictures.map(picture => (
          <img key={picture.id} src={picture.thumbnailUrl} alt={picture.title}/>
        ))}
      </div>
    )
  }
}

const root = document.getElementById('root')
render(<App/>, root)