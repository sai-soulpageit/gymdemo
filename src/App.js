import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";

// import ReactDOM from "react-dom/client";
// import {  BrowserRouter } from "react-router-dom";
// import Demoprograms from './components/Pages/Demoprograms';

function App() {
  return (
    <div className="App">
      
      <Hero />
      <Programs />
      <Reasons/>
      
      {/* <BrowserRouter>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
