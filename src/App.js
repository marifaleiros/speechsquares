import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AddSquareForm from './Components/AddSquareForm/AddSquareForm'
import SquareList from './Components/SquareList/SquareList'


class App extends React.Component {
  render() {
    return (
      <main className="app"> 
        <Header />
        <section className="h-100 w-80 center bg-light-gray pb4">
          <AddSquareForm/>
          <SquareList/>
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;