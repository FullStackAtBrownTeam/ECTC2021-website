import React from 'react';
import Layout from './Layout';
import './App.css';

const TEST_LIST = [
  <h1>This is the first section!</h1>,
  <div><h2>Here's another section</h2><p>Hello.... content here</p></div>
]

function App() {
  return (
    <Layout sections={TEST_LIST}></Layout>
  );
}

export default App;
