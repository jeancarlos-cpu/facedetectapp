import React, { Component } from 'react';
import Clarifai from 'clarifai';
import 'tachyons'
import './App.css';
import BackGround from './components/BackGround/BackGround';
import Navigation from './components/Navigation/Navigation';
import InputField from './components/InputField/InputField';
import Rank from './components/Rank/Rank';
import FaceRec from './components/FaceRec/FaceRec';
import SignIn from './components/SignIn/SingIn';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: 'b9be71ebc84e479d915f0371d67995f9'
});

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
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

  onRoute = (route) => {
    this.setState({ route: route })
  }

  inputClear = (event) => {
    event.target.value = '';
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
    this.setState({ box: box })
  }

  render() {
    const { route, box, imageUrl } = this.state;
    return (
      <div className="App">
        <BackGround />
        <Navigation Route={route} onRoute={this.onRoute} />
        {route === "home" ?
          <div>
            <Rank />
            <InputField onInput={this.onInput} onSubmit={this.onSubmit} inputClear={this.inputClear} />
            <FaceRec box={box} imageUrl={imageUrl} />
          </div>
          : (
            this.state.route === "signin" ?
              <SignIn onRoute={this.onRoute} />
              :
              <Register onRoute={this.onRoute} />
          )
        }
      </div>
    );

  }
}


export default App;
