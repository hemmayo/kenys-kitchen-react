import React, { Component } from 'react';
import '../styles/main.css'

import NavBar from '../components/Navbar'
import Sliders from '../components/Sliders'

class App extends Component {
  render() {
    const sliderItems = [
      {
        title: 'Hello world',
        subtitle: 'Lorem ipsum',
        image: 'https://source.unsplash.com/random/1500/?burger'
      }, {
        title: 'Salad',
        subtitle: 'Lorem ipsum',
        image: 'https://source.unsplash.com/random/1080/?salad'
      }
    ]
    return (
      <div className="App">
        <NavBar />
        <Sliders slides={sliderItems} />
      </div>
    );
  }
}

export default App;
