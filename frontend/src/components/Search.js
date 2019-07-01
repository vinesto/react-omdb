import React from 'react'
import styled from 'styled-components'

const StyledSearch = styled.div`
    padding-top: 1rem;
    position: relative;
    input {
        width: 80%;
        padding: 10px;
        border: 2px solid black;
        font-size: 2rem;
    }
`;

export default function Search(props) {
    return (
        <div>
            <StyledSearch>
                <input type="text" className="search" onChange={event => props.onTermChange(event.target.value)} placeholder="Search..." />
            </StyledSearch>

        </div>
    )
}


