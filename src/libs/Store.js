import uuid from 'uuid'
import { squareThemes, pickRandomTheme } from '../Components/Square/SquareThemes'

class Store {

  getSquares() {
    let squares = [
      {
        id: uuid.v4(),
        text: "ão",
        theme: squareThemes.red
      },
      {
        id: uuid.v4(),
        text: "até",
        theme: squareThemes.blue
      },
      {
        id: uuid.v4(),
        text: "me",
        theme: squareThemes.green
      },
      {
        id: uuid.v4(),
        text: "patê",
        theme: squareThemes.yellow
      },
      {
        id: uuid.v4(),
        text: "ia",
        theme: squareThemes.pink
      }
    ];
    return squares;
  }

  addSquare(text) {
    const randomTheme = pickRandomTheme();
    const newSquare = {
      id: uuid.v4(),
      text: text,
      theme: randomTheme
    };
    return newSquare;
  }

  saveSquares(squares) {
  }

  deleteSquare(id) {

  }

  getSettings() {
    let settings = {};
    return settings;
  }

  saveSettings(settings) {

  }
}

const store = new Store();
export default store;