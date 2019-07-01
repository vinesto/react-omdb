const Record = require('../models/record')
const Axios = require('axios')
const request = require('request')
require('dotenv').config()

const searchMovies = (req, res) => {
    const keyword = req.body.keyword
    const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}=${keyword}`
    Axios.get(url)
        .then(movies => {
            request({ url: url, time: true }, (err, response) => {
                Record.create({
                    reqTime: response.elapsedTime,
                    keyword: keyword,
                    result: movies.data
                })
                    .then(result => {
                        res.status(200).json({
                            msg: 'Success create record  & search !',
                            data: result
                        })

                    })
                    .catch(error => {
                        res.status(400).json({
                            msg: error.message
                        })
                    })
            })
            // console.log('===>', movies)
            // res.status(200).json({
            //     msg: 'Search movies success',
            //     data: movies.data
            // })
        })
        .catch(err => {
            res.status(400).json({
                msg: err.message
            })
        })
}

const getDetailMovie = (req, res) => {
    const movieId = req.params.id
    const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&i=${movieId}`
    Axios.get(url)
        .then(movie => {
            console.log(movie)
            res.status(200).json({
                msg: 'get detailed movie success',
                data: movie.data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({
                msg: err.message
            })
        })
}



const createRecord = (req, res) => {
    // Record.findOne({
    //     ID: req.body.id
    // })
    Record.create({
        reqTime: 10,
        keyword: req.body.keyword,
        result: [{ title: 'Batman Dark Knight' }]
    })
        .then(result => {
            res.status(200).json({
                msg: 'Success create record !',
                data: result
            })

        })
        .catch(error => {
            res.status(400).json({
                msg: error.message
            })
        })
}

module.exports = { createRecord, searchMovies, getDetailMovie }