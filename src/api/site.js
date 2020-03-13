import request from '../util/request';

export async function getList () {
  return request.get('/api/site', {
    page: 1,
    limit: 2,
  })
}