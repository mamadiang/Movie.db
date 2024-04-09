import React, {useEffect, useState } from "react";
import search from "../Assets/search.svg"
import MovieService from "../Services/MovieService";
import MovieCArd from "../Components/MovieCard";


const PageAccueil = () => {

    // STATES

    const[movie, setMovie] = useState([]);


    // COMPORTEMNT

    const getMovie = async () => {
        const response = await MovieService.fetchMovie();
        setMovie(response.data.results);
    }
useEffect(()=>{
    getMovie()

}, [])
    return<>

        <div className="d-flex">

             <div className="d-flex align-items-baseline">

                <h1 className="text-warning ">Movie v2</h1>
                    <ul className="d-flex">
                        <li>Accueil</li>
                        <li>Films</li>
                    </ul>
            </div>
                <span className="">
                <input type="search" name="" id=""placeholder="Rechercher film" />
                </span>
            
        </div>

        {movie.map((m)=>{
    return <>
    <MovieCArd film={m}nom={m.title}/>
    </>
})}
    </>

}

export default PageAccueil;