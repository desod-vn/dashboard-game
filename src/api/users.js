import request from "../utils/request";

export const list = () => {
  return request('/', 'GET')
}