import React, {useState, useEffect} from 'react'
import useForm from '../hooks/useForm'
import { useNavigate, useLocation } from 'react-router-dom'
import querystring from 'query-string'
import getMovieByName from '../selectors/getMovieByName'
import {MovieCard} from '../components/MovieCard'

import {url} from '../data/movies'
import { queries } from '@testing-library/react'

export const SeacrhScreen =  () => {
    const [movies, setMovies] = useState([]);
    const getData = async(url)=>{
        await fetch(url)
         .then(response => response.json())
            .then(data => {
                setMovies(data.results)
            });
        
    }
    

    const navigate = useNavigate()
    const location = useLocation()
    console.log(movies)
    const {q = ''} =querystring.parse(location.search)
    // console.log(q)
    const [values, handleInputChange, resetForm] = useForm({
       searchText: q,
    })
    const { searchText } = values
    console.log(location)
    const moviesFilterd = getMovieByName(searchText, movies)
    // console.log(moviesFilterd)
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(searchText)
        navigate(`/movies/${searchText}`)



    }
   useEffect(() => {
     getData(url)
   }, []);
   
    
    return (
        <div>
            <div class="starwarstitle">.</div>
            <hr></hr>
            <div className="col">
                <div className="colsearch">
                    <h4> Search Form </h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Find your movie"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                     
                    </form>
                </div>
                <div className="colresults">
                    <h4> Results </h4>
                    <hr />
                    {
                        moviesFilterd.map(movie=>(
                            <MovieCard
                            key={movie.id}
                            id={movie.id}
                            name={movie.name}
                            image={movie.image}
                            />
                        ))


                    }
                </div>
            </div>

        </div>
    )
}
