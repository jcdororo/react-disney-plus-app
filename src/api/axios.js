import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c68e8750cd621137bc5c412f55f73589",
    language: "ko-KR"
  }
})


export default instance;