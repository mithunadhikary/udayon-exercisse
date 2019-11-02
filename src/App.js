import React, {Component} from 'react';
import './css/index.css';
import TopAds from './components/ads/TopAds'
import Header from './components/header/Header'

function App() {
  return (
    <React.Fragment>
       <TopAds />
       <Header />
    </React.Fragment>
  );
}

export default App;
