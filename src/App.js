import React, {Component} from 'react';
import './css/index.css';
import TopAds from './components/ads/TopAds';
import Header from './components/header/Header';
import Home from './components/Home';

window.API = {

  fetchPopularDatas() {
    const encodedURI = encodeURI(`https://cors-anywhere.herokuapp.com/prothomalo-web.qtstage.io/api/v1/stories?fields=id,headline,subheadline,slug,sections,tags,author-name,authors,hero-image-s3-key,hero-image-metadata,published-at,story-template`)
    //const encodedURI = encodeURI(`https://api.punkapi.com/v2/beers?page=1&per_page=6`)
    return fetch(encodedURI)
      .then((allData) => allData.json())
      .then((allData) => allData)
      .catch((error) => {
        return null
      });
  }

}

function App() {
  return (
    <React.Fragment>
       <TopAds />
       <Header />
       <Home />
    </React.Fragment>
  );
}

export default App;
