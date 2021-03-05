import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  };

handleSearchTerm = (event) => {
  this.setState({ searchTerm: event.target.value });

}
  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }))
    // .then(data => console.log(data))

  }

  render() {
    return (
      <div>
    <form>
      <input type = "text"
        onChange={this.handleSearchTerm}>
      </input>
      <button type = "submit" name = "search" onClick={this.handleSubmit}>Search</button>
    </form>
     <MovieReviews reviews={this.state.MovieReviews} />
     </div>
    );
  }
}


export default SearchableMovieReviewsContainer; 
