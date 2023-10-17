import { reactive } from "vue";

export const store = reactive({
  api_movies: "https://api.themoviedb.org/3/search/movie",
  api_tvs: "https://api.themoviedb.org/3/search/tv",

  apiParams: {
    api_key: "9cb23a7db33519ec387baef21a68e154",
    language: "it-IT",
    query: "barbie",
  },

  //creo le array che conterranno i movies
  movies: [],
});
