import React        from 'react';
import './App.scss';
import Header       from '../Components/Header';
import About        from '../Components/About';
import CreativeTeam from '../Components/CreativeTeam';
import Form         from '../Components/Form';
import Footer       from '../Components/Footer';



export default function App() {
 
  return (
    <div className="App">
      <Header/>
      <About/>
      <CreativeTeam/>
      <Form/>
      <Footer/>
    </div>
  );
}

