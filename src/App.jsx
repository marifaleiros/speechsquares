import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AddSquareForm from './Components/AddSquareForm/AddSquareForm'
import SquareList from './Components/SquareList/SquareList'
import uuid from 'uuid'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      squares: [
        {
          id: uuid.v4(),
          text: "ão"
        },
        {
          id: uuid.v4(),
          text: "até"
        },
        {
          id: uuid.v4(),
          text: "me"
        },
        {
          id: uuid.v4(),
          text: "patê"
        },
        {
          id: uuid.v4(),
          text: "ia"
        }
      ]
    }
  }
  render() {
    return (
      <main>
        <Header />
        <AddSquareForm onAddSquare={this.onAddSquare} />
        <SquareList squares={this.state.squares} />
        <Footer />
      </main>
    );
  }

  onAddSquare = (text) => {
    const newSquare = {
      text: text
    };
    this.setState({ squares: this.state.squares.concat(newSquare) });
  }

}

export default App;