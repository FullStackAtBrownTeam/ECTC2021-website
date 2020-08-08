import React from 'react';
import Navigation from './components/NavBar'
import Layout from './Layout';
import './App.css';

// Read site content from external file
import contentData from "./content.json"

function App() {
  return (

    <div className="App">
      <Navigation className="navbar"></Navigation>
      <Layout 
        sections={contentData.content? contentData.content : {}}
        splashDesktop={contentData.splashDesktop? contentData.splashDesktop : {}}
        splashMobile={contentData.splashMobile? contentData.splashMobile : {}}
    />
    </div>
  );
}


export default App;

