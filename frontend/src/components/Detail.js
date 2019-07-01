import React from 'react'
import Header from './Header'
import SingleContent from './SingleContent'
import { Link } from 'react-router-dom'

export default function Detail(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Header />
            </Link>
            <SingleContent movieId={props.match.params.id} />
        </div>
    )
}
