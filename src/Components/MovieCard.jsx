import React from "react";
import Card  from "react-bootstrap/Card"
import '../Styles/Card.css'
//import {useNavigate} from "react-rooter-dom"
const MovieCArd = ({nom, film}) =>{

    // STATE

   // const navigate =useNavigate();

    //Comportements

   // const redirecTo = () => {
   //     navigate("/movie/+id")
   // }

    return <>
        <Card className='card-movie d-flex'  >
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+film.poster_path} />
        <Card.Body>
            <Card.Title> {nom[0].toUpperCase() +nom.slice(1)}</Card.Title> 
        </Card.Body>
        </Card>
    </>
}


export default MovieCArd;