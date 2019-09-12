import React, { Component } from 'react';
import Clarifai from 'clarifai';
import 'tachyons'
import './App.css';
import BackGround from './components/BackGround/BackGround';
import Navigation from './components/Navigation/Navigation';
import InputField from './components/InputField/InputField';
import Rank from './components/Rank/Rank';
import FaceRec from './components/FaceRec/FaceRec';

const app = new Clarifai.App({
  apiKey: 'b9be71ebc84e479d915f0371d67995f9'
});

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  onInput = (event) => {
    this.setState({ input: event.target.value })
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input })

    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then(response => this.displayBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));

  }

  calculateFaceLocation = (data) => {
    const coordinates = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("faceimg");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: coordinates.left_col * width,
      topRow: coordinates.top_row * height,
      rightCol: width - (coordinates.right_col * width),
      bottomRow: height - (coordinates.bottom_row * height)
    }
  }

  displayBox = (box) => {
    console.log(box)
    this.setState({ box: box })
  }

  render() {
    return (
      <div className="App">
        <BackGround />
        <Navigation />
        <Rank />
        <InputField onInput={this.onInput} onSubmit={this.onSubmit} />
        <FaceRec box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );

  }
}


export default App;
