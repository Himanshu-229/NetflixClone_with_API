import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './request';
import './Banner.scss'
function Banner() {



    const [movie,setMovie] = useState([]);
 
    useEffect(() =>{
      async function fetchData(){
       const request = await axios.get(requests.fetchNetflixOriginals);
       setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);

      }
      fetchData();
    },[]);
    
    console.log(movie); 

   function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
   }


  return (
    // {/* background image */}
    <div className='banner'
    style={{
        backgroundSize: "cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        
     }}
    >
        
        
        <div className='banner__contents'>
           
        {/* title */}
         <h1 className='banner__title'>
            {movie?.title || movie?.name ||movie?.original_name}
         </h1>
         {/* description */}
        <span>
        <h1 className='banner__description'>
            {truncate(movie?.overview,150)}
            </h1>
        </span>
         {/* div 2 button */}
         <div className="buttons">
           <button className="play">
            <PlayArrow/>
            <span>Play</span>
           </button>
           <button className="more">
           <InfoOutlined/>
           <span>Info</span>
           </button>
        </div>
        
        </div>
        
        <div className='fade_bottum'></div>
    </div>
    )
}

export default Banner