import React from 'react'
import request from './request';
import Banner from './Banner'
import Navbar from './Navbar'
import Row from './Row'

function home() {
  return (
    <div className='home'>

      <Navbar/>
       <Banner/>
       <Row title ="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
       <Row title ="Trending Now" fetchUrl={request.fetchTrending}/>
       <Row title ="Top Rated" fetchUrl={request.fetchTopRated}/>
       <Row title ="Action Movies" fetchUrl={request.fetchActionMovies}/>
       <Row title ="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
       <Row title ="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
       <Row title ="Documentries" fetchUrl={request.fetchDocumentaries}/>
      

    </div>
  )
}

export default home