import React, { Component } from 'react';
import Sounds from '../assets/sounds';


class App extends Component {
  constructor() {
    super();
    this.state = {
      sounds: Object.keys(Sounds),
    };
    this.playSound = this.playSound.bind(this);
  }

  playSound(eventObj) {
    const audio = Sounds[eventObj.currentTarget.id];
    audio.currentTime = 0;
    audio.play();
    // code to be run when click event is fired goes below this line!
  }


  render() {
    const buttonArray = [];
    for(let i = 0; i < this.state.sounds.length; i++){
      buttonArray.push(<Button 
        key={i}
        sound={this.state.sounds[i]} playSound={this.playSound}/>)
    }
    return (
      <div className="button-container">
        {buttonArray}
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div
        // Add additional attributes here
        id={this.props.sound}
        className="button"
        onClick={this.props.playSound}
      >
        <p>{this.props.sound}</p>
      </div>
    );
  }
}

export default App;
