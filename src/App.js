import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


class App extends React.Component {
  render() {
    return (
      <main className="app"> 
        <Header />
        <section class="h-100 w-80 center bg-light-gray pt1 pb4 ph3 ph5-m ph6-l">
          <div>
            Form and Squares here
         </div>
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;