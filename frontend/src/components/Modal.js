import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

Modal.setAppElement('#root')

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

const StyledModal = (props) => {

    if (!props.selectedItem) {
        return (<div></div>)
    }

    const movie = props.selectedItem.data
    
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={() => props.onRequestClose()}
        >
            <SingleItemStyles>
                <img src={movie.Poster} alt={movie.Title} />
                <div className="details">
                    <h1>{movie.Title} ({movie.Year})</h1>
                    <h3>Released:</h3>
                    <p>{movie.Released}</p>
                    <h3>Genre:</h3>
                    <p>{movie.Genre}</p>
                    <h3>Actors:
                    </h3>
                    <p>{movie.Actors}</p>
                    <h3>Plot:</h3>
                    <p>{movie.Plot}</p>
                </div>
            </SingleItemStyles>

        </Modal>
    )
}

export default StyledModal
