import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AddButtonForm from './Components/AddButtonForm/AddButtonForm'


class App extends React.Component {
  render() {
    return (
      <main className="app"> 
        <Header />
        <section class="h-100 w-80 center bg-light-gray pb4">
          <AddButtonForm/>
          <div className="pa2">
            <div class="ba br2 b--light-silver shadow-1 fl w4 h4 bg-pink dim pointer">
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