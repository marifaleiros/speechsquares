const StoreKeys = {
  SQUARES: "SQUARES",
  SETTINGS: "SETTINGS"
}

class Store {
  getSquares() {
    const squares = this.get(StoreKeys.SQUARES);
    return squares || [];
  }

  saveSquares(squares) {
    this.save(StoreKeys.SQUARES, squares);
  }

  getSettings() {
    const settings = this.get(StoreKeys.SETTINGS);
    if (settings && settings.rate)
      return settings;
    return { rate: 0, selectedVoice: undefined };
  }

  saveSettings(rate, voiceUri) {
    const settings = {
      rate,
      selectedVoice: voiceUri
    }
    this.save(StoreKeys.SETTINGS, settings);
  }

  save(key, data) {
    const json = JSON.stringify(data);
    window.localStorage.setItem(key, json);
  }

  get(key) {
    const json = window.localStorage.getItem(key);
    return JSON.parse(json);
  }
}

const store = new Store();
export default store;