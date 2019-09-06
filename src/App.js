import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <header class="tc ph4">
          <h1 class="f3 f2-m f1-l fw2 black-90 mv3">
            Speech Squares
          </h1>
        </header>
        <nav class="pv4 ph3 ph5-m ph6-l">
          <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">Home</a>
          <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">About</a>
          <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Store</a>
          <a class="link dim gray    f6 f5-ns dib" href="#" title="Contact">Contact</a>
        </nav>
        <section class="w-80 center bg-light-gray pv4 ph3 ph5-m ph6-l">
         <div>
           Form and Squares here
         </div>
        </section>
        <footer class="fixed bottom-0 w-100 pv4 ph3 ph5-m ph6-l mid-gray">
          <small class="f6 db">Made by Mar</small>
        </footer>
      </div>
    );
  }
}

export default App;