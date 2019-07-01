import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledItem = styled.div`
    box-shadow: 2px 2px 4px 0 #ccc;
    box-sizing: border-box;
    display: inline-block;
    margin: 0 0 1.5em;
    padding: 1em;
    width: 100%;
    img {
        width: 100%
    }
`;

const Item = (props) => {
    return (
        <Link to={`/${props.movie.imdbID}`} >
            <StyledItem>
                <h1>{props.movie.Title} ({props.movie.Year})</h1>
                <img src={props.movie.Poster} alt={props.movie.Title} />
            </StyledItem>
        </Link>
    )

}

export default Item

