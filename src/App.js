import React from 'react';
import Layout from './Layout';
import './App.css';

// Read site content from external file
import contentData from "./content.json"

function App() {
  return (
    <Layout 
      sections={contentData.content? contentData.content : {}}
    />
  );
}

export default App;