# OMDB API
###  Basic app with basic record OMDB API.
## REST API

### List of basic routes:

| Route | HTTP | Description |
| :---         |     :---      |          :--- |
| <span style="color:red">/records/search</span>   | POST     | Search movies    |
| <span style="color:red">/records/:id</span>     | GET       | Get a single movie by imdbId      |


## Usage
### With only npm:
```
npm install
npm start
```

Rename ".env-example" file into ".env" file and fill the credential

Access the website via http://localhost:4000.