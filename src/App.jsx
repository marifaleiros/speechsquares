import React from 'react';
import uuid from 'uuid'
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AddSquareForm from './Components/AddSquareForm/AddSquareForm'
import SquareList from './Components/SquareList/SquareList'
import Settings from './Components/SettingsModal/SettingsModal'
import { pickRandomTheme } from './Components/Square/SquareThemes'
import store from './libs/Store'
import synth from './libs/Synth'

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
        <Settings selectedVoice={this.state.selectedVoice} onSelectedVoiceChanged={this.changeSelectedVoice} />
        <SquareList squares={this.state.squares} deleteSquare={this.deleteSquare} />
        <Footer />
      </main>
    );
  }

  saveData = () => {
    store.saveSquares(this.state.squares);
    store.saveSettings(this.state.selectedVoice, this.state.rate);
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
    synth.setVoice(voiceUri);
  }
}

export default App;