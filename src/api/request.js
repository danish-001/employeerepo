import axios from 'axios'

type IProps = {
  path: string,
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
  headers?: Object,
  body?: Object,
  images?: any,
  fullResponse?: boolean,
  isAuthRequired?: boolean,
  type?: string,
  headerProps?: any,
}

export default class Request {
  static get(params) {
    return this.request({ method: 'GET', ...params })
  }

  static post(params) {
    return this.request({ method: 'POST', ...params })
  }

  static put(params) {
    return this.request({ method: 'PUT', ...params })
  }

  static delete(params) {
    return this.request({ method: 'DELETE', ...params })
  }

  static patch(params) {
    return this.request({ method: 'PATCH', ...params })
  }

  static createFormData = (body) => {
    return JSON.stringify(body)
  }

  static async request({ path, method, body, headerProps = {} }: IProps) {
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headerProps,
    }

    const params = Request.createFormData(body)
    const url = `http://dummy.restapiexample.com/api/v1/${path}`

    return axios({
      method: method,
      url: url,
      headers: defaultHeaders,
      data: params,
    })
      .then(function (response) {
        const { data, status } = response

        if (status === 401) {
          store.dispatch(logout({}))
          throw response
        }

        if (status === 403 || status === 404 || status === 500) {
          throw response
        }
        return data
      })
      .catch(function ({ response }) {
        if (response?.status === 401) {
          throw response
        } else if (
          response?.data?.error &&
          response?.data?.error.includes('user_is_not_customer')
        ) {
          throw response
        }
        return response
      })
  }
}
