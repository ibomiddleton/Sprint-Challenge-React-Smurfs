import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';



class App extends Component {
  componentDidMount() {
    console.log('inside cdm');
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err));
}

update = (smurfs) =>{
  this.setState({smurfs: smurfs});
}

  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <Route exact path='/' render={() => <Smurfs smurfs={this.state.smurfs} />} />
      <Route path='/smurf-form' render={() => <SmurfForm update={this.update} /> }/> 
        
        

      </div>
    );
  }
}

export default App;
