import axios from 'axios';

class Request {
  constructor() {
    const codeMessage = {
      200: '服务器成功返回请求的数据。',
      201: '新建或修改数据成功。',
      202: '一个请求已经进入后台排队（异步任务）。',
      204: '删除数据成功。',
      400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
      401: '用户没有权限（令牌、用户名、密码错误）。',
      403: '用户得到授权，但是访问是被禁止的。',
      404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
      406: '请求的格式不可得。',
      410: '请求的资源被永久删除，且不会再得到的。',
      422: '当创建一个对象时，发生一个验证错误。',
      500: '服务器发生错误，请检查服务器。',
      502: '网关错误。',
      503: '服务不可用，服务器暂时过载或维护。',
      504: '网关超时。',
    };
    //http request 拦截器
    axios.interceptors.request.use(
      config => {
          // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
          config.data = JSON.stringify(config.data);
          config.headers = {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
          // if(token){
          //   config.params = {'token':token}
          // }
          return config;
      }
    );
    //http response 拦截器
    axios.interceptors.response.use(
      response => {
        console.log(response)
          if (response.data.errCode == 2) {
              // router.push({
              //     path: "/login",
              //     querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
              // })
          }
          return response;
      },
      error => {
          if (error.response.status === 404) {
            window.location.href = '/#/404';
          }
          if (error.response.status === 401) {
            // window.location.href = '/#/login';
          }
          return Promise.reject({
            status: error.response.status,
            statusText: error.response.statusText,
            descript: codeMessage[error.response.status] || '服务异常',
          })
      }
    )
  }

  get(url, params = {}) {
    return axios.get(url, params);
  }

  post(url, data = {}) {
    return axios.post(url, data);
  }

  put(url, data) {
    return axios.put(url, data);
  }

  delete(url) {
    return axios.delete(url);
  }
}


export default new Request()