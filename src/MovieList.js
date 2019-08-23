import React, {useState , useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const MovieList = ()=>{
    const [Movies , setMovies] = useContext(MovieContext); 
    return(
        <div className='listM'>
                {Movies.map(el =>(
                   <Movie name={el.name} price={el.price} key={el.id}/>
                ))}
            
        </div>
    )
}

export default MovieList;