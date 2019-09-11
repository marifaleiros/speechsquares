import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AddSquareForm from './Components/AddSquareForm/AddSquareForm'
import SquareList from './Components/SquareList/SquareList'
import uuid from 'uuid'
import { squareThemes, pickRandomTheme } from './Components/Square/SquareThemes'
import SettingsModal from './Components/SettingsModal/SettingsModal'
import store from './libs/Store'

class App extends React.Component {
  constructor() {
    super()
    const squares =  store.getSquares();
    this.state = {
      squares: squares,
      showSettings: false
    }
  }

  render() {
    return (
      <main>
        <Header openSettingsModal={this.openSettingsModal} />
        <AddSquareForm onAddSquare={this.onAddSquare} />
        <SquareList squares={this.state.squares} deleteSquare={this.deleteSquare} />
        <SettingsModal isOpen={this.state.showSettings} closeModal={this.closeModal}/>
        <Footer />
      </main>
    );
  }

  onAddSquare = (text) => {
    const randomTheme = pickRandomTheme();
    console.log(randomTheme);
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

  openSettingsModal = () => {
    this.setState({ showSettings: true });
  }
  closeModal = () => {
    this.setState({ showSettings: false });
  }
}

export default App;