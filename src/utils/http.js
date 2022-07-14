import axios from "axios"

// axios.defaults.baseURL = "http://localhost:3999/api"

const request = (endpoint, method, data) => {
  const accessToken = localStorage.getItem("accessToken") || null
  axios.defaults.headers.common["Authorization"] = accessToken

  return axios({
    method,
    url: endpoint,
    data: data || {},
  })
}

export default request