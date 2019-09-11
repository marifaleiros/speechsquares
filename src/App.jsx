import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Menu from './Components/Menu/Menu';
import AddSquareForm from './Components/AddSquareForm/AddSquareForm'
import SquareList from './Components/SquareList/SquareList'

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

  onAddSquare = (text) => {
    const newSquare = store.addSquare(text);
    this.setState({ squares: this.state.squares.concat(newSquare) });
  }

  deleteSquare = (id, e) => {
    e.stopPropagation();
    store.deleteSquare(id)
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