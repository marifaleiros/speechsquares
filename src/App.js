import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


class App extends React.Component {
  render() {
    return (
      <main className="app"> 
        <Header />
        <section class="h-100 w-80 center bg-light-gray pb4">
          <form class="bg-blue2 center pa4">
            <fieldset class="cf bn ma0 pa0">
              <div class="cf">
                <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="type a 'sound' and add it to the board" type="text" name="email-address" value="" id="email-address"/>
                <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Add"/>
              </div>
            </fieldset>
          </form>
          <div className="pa2">
            <div class="ba br2 b--light-silver shadow-1 fl w4 h4 bg-pink dim">
              <p class="db link  tc pa4">
                ão
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;