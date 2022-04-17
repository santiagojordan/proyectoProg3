import React from 'react';
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies"
//import Card from "./components/Card/Card";
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div>
      <Header/>

        <main>
          <Movies/>
        </main>

      <Footer/>
    </div>
  );
}

export default App;