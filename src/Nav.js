import React ,{useContext} from 'react';
import './App.css'
import {MovieContext} from './MovieContext';

const Nav = ()=>{
    const [Movies , setMovies] = useContext(MovieContext);
    return(
     <nav>
         <h3>Mohammad QB</h3>
         <p>Number of movies List: {Movies.length}</p>
     </nav>
    )
}

export default Nav;
