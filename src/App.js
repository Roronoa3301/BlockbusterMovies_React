import React from 'react';
import { useState,useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import searchIcon from './search.svg';

// 5b1d9eac

const API_URL = "http://www.omdbapi.com?apikey=5b1d9eac";


const App = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    // useEffect(() => {
    //     searchMovies("batman");
    // },[]);

    return (<div className="app">
        <h1>Blockbuster Movies</h1>
        <div className="search">
            <input 
                type="text" 
                placeholder="Search for a movie" 
                value = {searchTerm} 
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <img
                src={searchIcon}
                alt="search"
                onClick={() => {
                    searchMovies(searchTerm);
                }}
            />

            
        </div>
        {movies?.length > 0 
            ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))}
                </div>
            ) : (<div classNme="empty"><h1>No movies found.</h1></div>)}


        
    </div>);
}

export default App;