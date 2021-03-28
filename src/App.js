
import './App.css';
import Questions from './Components/Questions'
import React, {useEffect}from "react";
import ReactGA from "react-ga";

function App() {

  useEffect(() => {
    ReactGA.initialize('267091666');
    ReactGA.pageview(window.location.pathname);
  })


  return (
    <div className="app">
     <Questions />
    </div>
  );
}

export default App;
