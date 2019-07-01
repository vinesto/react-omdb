import React from 'react'
import styled from 'styled-components'

const SingleItemStyles = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    box-shadow: lightgrey;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    min-height: 800px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .details {
        margin: 1rem;
        font-size: 2rem;
    }
`;

const SingleItem = (props) => {


    return (
        <SingleItemStyles>
            <img src={props.movie.Poster} alt={props.movie.Title} />
            <div className="details">
                <h1>{props.movie.Title} ({props.movie.Year})</h1>
                <h3>Rating:</h3>
                <p>{props.movie.imdbRating} / 10</p>
                <h3>Released:</h3>
                <p>{props.movie.Released}</p>
                <h3>Genre:</h3>
                <p>{props.movie.Genre}</p>
                <h3>Actors:</h3>
                <p>{props.movie.Actors}</p>
                <h3>Plot:</h3>
                <p>{props.movie.Plot}</p>
            </div>
        </SingleItemStyles>
    )
}

export default SingleItem
