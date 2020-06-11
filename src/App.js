import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axois from 'axios';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {};

  componentDidMount() {
    axois.get('http://localhost:5000/pokemon/charmander').then((r) => {
      this.setState({desc: r.data.description});
    });
  }

  render() {
    console.log(this.state);
    return (
      <div >

        {this.state.desc}
      </div>
    );
  }
}

export default App;
