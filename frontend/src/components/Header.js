import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    a {
        padding: 0.5rem 1rem;
        background: red;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }
    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.header`
    .header {
        border-bottom: 10px solid black;
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: center;
        align-items: stretch;
        @media (max-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;   
        }
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <div className="header">
                <Logo>
                    <a>Omdb</a>
                </Logo>
            </div>
        </StyledHeader>
    )
}
