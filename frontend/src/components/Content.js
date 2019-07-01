import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovies } from '../store/actions/movies'
import debounce from 'lodash.debounce'
import Search from './Search'
import Items from './Items'

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        isLoading: state.movies.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovies: (term) => dispatch(searchMovies(term)),
    }
}

export class Content extends Component {

    handleTermChange = debounce(
        async (term) => {
            this.props.searchMovies(term)
        }, 350
    )

    render() {
        return (
            <div>
                <Search onTermChange={(term) => this.handleTermChange(term)} />
                <Items movies={this.props.movies} onItemSelect={selectedItem => this.props.openModal({ selectedItem })} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)