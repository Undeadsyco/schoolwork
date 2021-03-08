import React from 'react';
import ReactDOM from 'react-dom';

const App = props =>{
    return (
        <div>
            <NumberOfStudents />
        </div>
    )
}

class NumberOfStudents extends React.Component{
    constructor(props){
        super(props);
        this.state={
            enrolledStudents: 1275,
            newEnrolledStudents: 0,
            waitlistedStudents: 385,
            newWaitlistedStudents: 0
        }
    }

    addOneEnrolled(){
        this.setState({enrolledStudents: this.state.enrolledStudents + 1})
    }

    addOneWaitlisted(){
        this.setState({waitlistedStudents: this.state.waitlistedStudents + 1})
    }

    addMultipleEnrolled(){
        this.setState({enrolledStudents: this.state.enrolledStudents + parseInt(this.state.newEnrolledStudents)})
    }

    addMultipleWaitlisted(){
        this.setState({waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.newWaitlistedStudents)})
    }

    render(){
        return(
            <div>
                <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
                <button onClick={this.addOneEnrolled.bind(this)}>Add 1 Enrolled Students</button>
                <h3>Add Multiple Enrolled Students</h3>
                <input type='number' 
                    onChange={event => this.setState({newEnrolledStudents: event.target.value})} 
                    value={this.state.newEnrolledStudents}/>
                <button onClick={this.addMultipleEnrolled.bind(this)}>Increase Students</button>
                <h1>Waitlisted Students: {this.state.waitlistedStudents}</h1>
                <button onClick={this.addOneWaitlisted.bind(this)}>Add 1 Waitlisted Students</button>
                <h3>Add Multiple Waitlisted Students</h3>
                <input type='number' 
                    onChange={event => this.setState({newWaitlistedStudents: event.target.value})}
                    value={this.state.newWaitlistedStudents}/>
                <button onClick={this.addMultipleWaitlisted.bind(this)}>Increase Students</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));