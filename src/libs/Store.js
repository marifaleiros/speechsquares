

const StoreKeys = {
  SQUARES: "SQUARES"
}

class Store {

  getSquares() {
    const json = window.localStorage.getItem(StoreKeys.SQUARES);
    // let squares = [
    //   {
    //     id: uuid.v4(),
    //     text: "ão",
    //     theme: squareThemes.red
    //   },
    //   {
    //     id: uuid.v4(),
    //     text: "até",
    //     theme: squareThemes.blue
    //   },
    //   {
    //     id: uuid.v4(),
    //     text: "me",
    //     theme: squareThemes.green
    //   },
    //   {
    //     id: uuid.v4(),
    //     text: "patê",
    //     theme: squareThemes.yellow
    //   },
    //   {
    //     id: uuid.v4(),
    //     text: "ia",
    //     theme: squareThemes.pink
    //   }
    // ];
    const squares = JSON.parse(json);
    return squares || [];
  }

  saveSquares(squares) {
    const json = JSON.stringify(squares);
    window.localStorage.setItem(StoreKeys.SQUARES, json);
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