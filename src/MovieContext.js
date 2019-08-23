import React, {createContext , useState} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props =>{
    const [Movies , setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '10$',
            id: 1
        },
        {
            name: 'Game of Thronse',
            price: '20$',
            id: 2
        },
        {
            name: 'Home Alone',
            price: '30$',
            id: 3
        },
        {
            name: 'Pitch Berfect',
            price: '40$',
            id: 4
        }
    ])
    return(
        <MovieContext.Provider value={[Movies , setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}