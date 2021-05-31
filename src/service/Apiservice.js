import axios from "axios";

export function getAllTvShows() {
    return axios.get(`http://api.tvmaze.com/shows`);
  }
  export function getSearchShowsService(enteredValue) {
    return axios.get(`http://api.tvmaze.com/search/shows?q=${enteredValue}`);
  }
  export function getShowCast(id) {
    return axios.get(`http://api.tvmaze.com/shows/${id}/cast`);
  }
  export function getShowDetails(id) {
    return axios.get(`http://api.tvmaze.com/shows/${id}`);
  }
