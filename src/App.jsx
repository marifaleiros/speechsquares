import React from 'react';
import uuid from 'uuid'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AddSquareForm from './Components/AddSquareForm/AddSquareForm'
import SquareList from './Components/SquareList/SquareList'
import Settings from './Components/Settings/Settings'

import pickRandomTheme from './libs/SquareThemes'
import store from './libs/Store'
import synth from './libs/Synth'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    const squares = store.getSquares();
    const settings = store.getSettings();
    this.state = {
      squares: squares,
      selectedVoice: settings.selectedVoice,
      rate: settings.rate
    }
    synth.setVoiceUri(settings.voiceUri);
    synth.setRate(settings.rate);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveData);
  }

  componentWillUnmount() {
    this.saveData();
    window.removeEventListener('beforeunload', this.saveData); // remove the event handler for normal unmounting
  }

  render() {
    return (
      <main>
        <Header />
        <AddSquareForm onAddSquare={this.onAddSquare} />
        <Settings selectedVoice={this.state.selectedVoice} 
          rate={this.state.rate} 
          onSelectedVoiceChanged={this.changeSelectedVoice} 
          onRateChanged={this.changeRate}
        />
        <SquareList squares={this.state.squares} deleteSquare={this.deleteSquare} />
        <Footer />
      </main>
    );
  }

  saveData = () => {
    store.saveSquares(this.state.squares);
    store.saveSettings(this.state.rate, this.state.selectedVoice);
  }

  onAddSquare = (text) => {
    const randomTheme = pickRandomTheme();
    const newSquare = {
      id: uuid.v4(),
      text: text,
      theme: randomTheme
    };
    this.setState({ squares: this.state.squares.concat(newSquare) });
  }

  deleteSquare = (id, e) => {
    e.stopPropagation();
    this.setState({
      squares: this.state.squares.filter(s => s.id !== id)
    });
  }

  changeSelectedVoice = (e) => {
    const voiceUri = e.target.value;
    this.setState({ selectedVoice: voiceUri });
    synth.setVoiceUri(voiceUri);
  }

  changeRate = (e) => {
    const rate = e.target.value;
    this.setState({ rate: rate });
    synth.setRate(rate);
  }
}

export default App;