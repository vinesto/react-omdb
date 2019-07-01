import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const StyledList = styled.div`
    column-gap: 1.5em;
    font-size: .85em;
    margin: 1.5em 0;
    padding: 0;

    @media only screen and (min-width: 400px) {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
    }

    @media only screen and (min-width: 700px) {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
    }

    @media only screen and (min-width: 900px) {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
    }

    @media only screen and (min-width: 1100px) {
        -moz-column-count: 5;
        -webkit-column-count: 5;
        column-count: 5;
    }
`;

const Items = (props) => {
    if (!props.movies) {
        return (<div></div>)
    } else {
        return (
            <StyledList>
                {props.movies.map(movie => {
                    return <Item key={movie.imdbID} movie={movie} onItemSelect={props.onItemSelect} />
                })}
            </StyledList>
        )
    }
}

export default Items
