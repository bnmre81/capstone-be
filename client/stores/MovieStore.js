import { makeAutoObservable } from "mobx";
import axios from "axios";

class MovieStore {
  includeG = null;
  excludeG = null;
  movies = [];
  randomMoviesList = [];

  constructor() {
    makeAutoObservable(this);
  }
  fetchRandomList = () => {
    result = [];

    for (let i = 0; i < 10; i++) {
      result.push(Math.floor(Math.random() * this.movies.length));
    }
    let unique = [...new Set(result)];
    unique.forEach((element) => {
      this.randomMoviesList.push(this.movies[element]);
    });
  };

  fetchTrendingMovies = () => {
    // don't use fetch, use axios with async/await instead.
    // REVIEW: Replace .then with async await
    // REVIEW: Add a loading
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=22c9611c5b9f0242bd4f5c917ee4115f&language=en-US&page=1`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data.results);
        this.movies = data.results;
        this.fetchRandomList();
      });
    // try {
    //   console.log(`Zero`, this.movies);
    //   const res = await axios.get(
    //     `https://api.themoviedb.org/3/movie/popular?api_key=22c9611c5b9f0242bd4f5c917ee4115f&language=en-US&page=1`
    //   );
    //   this.movies = res.data;

    //   console.log(`second`, this.movies);
    // } catch (error) {
    //   console.error(error);
    // }
  };
}

// Genres
// `https://api.themoviedb.org/3/discover/movie?api_key=a6358e507fbfbbc6c17a38f10a736e3f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${includeG}8&without_genres=${excludeG}`;

const movieStore = new MovieStore();
movieStore.fetchTrendingMovies();

export default movieStore;
