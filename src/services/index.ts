import axios from "axios"

export const fetchRepositories =() => {
  return axios("https://gh-trending-api.herokuapp.com/repositories");
}
export const fetchDevelopers =() => {
  return axios("https://gh-trending-api.herokuapp.com/developers");
}