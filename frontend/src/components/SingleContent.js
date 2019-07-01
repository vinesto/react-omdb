import React, { Component } from 'react'
import { connect } from 'react-redux'
import { detailMovie } from '../store/actions/movies'
import SingleItem from './SingleItem'

const mapStateToProps = (state) => {
    return {
        movie: state.movies.movie,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        detailMovie: (id) => dispatch(detailMovie(id))
    }
}



export class SingleContent extends Component {

    componentDidMount() {
        this.props.detailMovie(this.props.movieId)
    }

    render() {
        return (
            <div>
                <SingleItem movie={this.props.movie} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleContent)

