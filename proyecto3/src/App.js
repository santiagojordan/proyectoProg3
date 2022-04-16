import React from 'react';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
        <main>
          <Card/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;