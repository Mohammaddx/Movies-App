import React ,{useState , useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () =>{
const [name , setName] = useState('');

const AddName = e =>{
    setName(e.target.value);
}
const [price , setPrice] = useState('');

const AddPrice = e =>{
    setPrice(e.target.value);
}

const [Movies , setMovies] = useContext(MovieContext);

const addMovie = e =>{
    e.preventDefault();
    setMovies(pervMovie=> [...pervMovie , {name: name , price: price}]);
}

return(
    <form onSubmit={addMovie}>
        <input type="text" value={name} onChange={AddName}/>
        <input type="text" value={price} onChange={AddPrice}/>
        <input type="submit" />
    </form>
)
}

export default AddMovie;