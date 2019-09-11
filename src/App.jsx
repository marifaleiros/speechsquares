import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Menu from './Components/Menu/Menu';
import AddSquareForm from './Components/AddSquareForm/AddSquareForm'
import SquareList from './Components/SquareList/SquareList'
import uuid from 'uuid'
import { pickRandomTheme } from './Components/Square/SquareThemes'
import SettingsModal from './Components/SettingsModal/SettingsModal'
import store from './libs/Store'

class App extends React.Component {
  constructor() {
    super()
    const squares = store.getSquares();
    this.state = {
      squares: squares,
      showSettings: false
    }
  }

  componentDidMount(){
    window.addEventListener('beforeunload', this.saveSquares);
  }

  componentWillUnmount() {
    this.saveSquares();
    window.removeEventListener('beforeunload', this.saveSquares); // remove the event handler for normal unmounting
  }

  render() {
    return (
      <main>
        <Header />
        <Menu openSettingsModal={this.openSettingsModal} />
        <AddSquareForm onAddSquare={this.onAddSquare} />
        <SquareList squares={this.state.squares} deleteSquare={this.deleteSquare} />
        <SettingsModal isOpen={this.state.showSettings} closeModal={this.closeModal} />
        <Footer />
      </main>
    );
  }

  saveSquares = () => {
    store.saveSquares(this.state.squares);
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

  openSettingsModal = () => {
    this.setState({ showSettings: true });
  }
  closeModal = () => {
    this.setState({ showSettings: false });
  }
}

export default App;