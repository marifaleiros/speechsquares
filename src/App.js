import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Header />
        <section class="w-80 center bg-light-gray pt1 pb4 ph3 ph5-m ph6-l">
          <nav class="pv4">
            <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">Home</a>
            <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">About</a>
            <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Store</a>
            <a class="link dim gray    f6 f5-ns dib" href="#" title="Contact">Contact</a>
          </nav>
          <div>
            Form and Squares here
         </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;