import React from 'react';
import Row from './Row';
import request from './request';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
       
       <Row title ="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
       <Row title ="Trending Now" fetchUrl={request.fetchTrending}/>
       <Row title ="Top Rated" fetchUrl={request.fetchTopRated}/>
       <Row title ="Action Movies" fetchUrl={request.fetchActionMovies}/>
       <Row title ="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
       <Row title ="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
       <Row title ="Documentries" fetchUrl={request.fetchDocumentaries}/>

    </div>
  );
}

export default App;
