import request from '../util/request';

export async function login (data) {
  return request.post('/api/login', data)
}