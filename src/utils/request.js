import axios from 'axios'
import { message, notification } from 'ant-design-vue'

// env文件配置的变量除了NODE_ENV与BASE_URL外，都要加上VUE_APP前缀才能识别到
// 统一配置
const BACKEND_REQUEST = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    responseType: 'json',
    validateStatus (status) {
        // 200 外的状态码都认定为失败
        return status === 200
    }
})
// 拦截响应
BACKEND_REQUEST.interceptors.response.use((config) => {
    return config
}, (error) => {
    if (error.response) {
        const errorMessage = error.response.data === null ? '系统内部异常，请联系网站管理员' : error.response.data.message
        switch (error.response.status) {
        case 404:
            notification.error({
                title: '系统提示',
                message: '很抱歉，资源未找到'
            })
            break
        case 403:
        case 401:
            notification.warn({
                title: '系统提示',
                message: '很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效'
            })
            break
        default:
            notification.error({
                title: '系统提示',
                message: errorMessage
            })
            break
        }
    }
    return Promise.reject(error)
})
const request = {
    postJson (url, params) {
        return BACKEND_REQUEST.post(url, params, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
    },
    post (url, params) {
        return BACKEND_REQUEST.post(url, params, {
            transformRequest: [(params) => {
                let result = ''
                Object.keys(params).forEach((key) => {
                    if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
                        result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
                    }
                })
                return result
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    put (url, params) {
        return BACKEND_REQUEST.put(url, params, {
            transformRequest: [(params) => {
                let result = ''
                Object.keys(params).forEach((key) => {
                    if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
                        result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
                    }
                })
                return result
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    get (url, params) {
        let _params
        if (Object.is(params, undefined)) {
            _params = ''
        } else {
            _params = '?'
            for (const key in params) {
                // eslint-disable-next-line no-prototype-builtins
                if (params.hasOwnProperty(key) && params[key] !== null) {
                    _params += `${key}=${params[key]}&`
                }
            }
        }
        return BACKEND_REQUEST.get(`${url}${_params.substr(0, _params.length - 1)}`)
    },
    delete (url, params) {
        let _params
        if (Object.is(params, undefined)) {
            _params = ''
        } else {
            _params = '?'
            for (const key in params) {
                // eslint-disable-next-line no-prototype-builtins
                if (params.hasOwnProperty(key) && params[key] !== null) {
                    _params += `${key}=${params[key]}&`
                }
            }
        }
        return BACKEND_REQUEST.delete(`${url}${_params.substr(0, _params.length - 1)}`)
    },
    async export (url, params = {}) {
        message.info({
            showClose: true,
            message: '导出数据中'
        })
        try {
            const r = await BACKEND_REQUEST.post(url, params, {
                transformRequest: [(params) => {
                    let result = ''
                    Object.keys(params).forEach((key) => {
                        if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
                            result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
                        }
                    })
                    return result
                }],
                responseType: 'blob'
            })
            const content = r.data
            const blob = new Blob([content])
            const fileName = `${new Date().getTime()}_导出结果.xlsx`
            if ('download' in document.createElement('a')) {
                const elink = document.createElement('a')
                elink.download = fileName
                elink.style.display = 'none'
                elink.href = URL.createObjectURL(blob)
                document.body.appendChild(elink)
                elink.click()
                URL.revokeObjectURL(elink.href)
                document.body.removeChild(elink)
            } else {
                navigator.msSaveBlob(blob, fileName)
            }
        } catch (r) {
            console.error(r)
            message.error({
                showClose: true,
                message: '导出失败'
            })
        }
    },
    download (url, params, filename) {
        message.info({
            showClose: true,
            message: '文件传输中'
        })
        return BACKEND_REQUEST.post(url, params, {
            transformRequest: [(params) => {
                let result = ''
                Object.keys(params).forEach((key) => {
                    if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
                        result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
                    }
                })
                return result
            }],
            responseType: 'blob'
        }).then((r) => {
            const content = r.data
            const blob = new Blob([content])
            if ('download' in document.createElement('a')) {
                const elink = document.createElement('a')
                elink.download = filename
                elink.style.display = 'none'
                elink.href = URL.createObjectURL(blob)
                document.body.appendChild(elink)
                elink.click()
                URL.revokeObjectURL(elink.href)
                document.body.removeChild(elink)
            } else {
                navigator.msSaveBlob(blob, filename)
            }
        }).catch((r) => {
            console.error(r)
            message.error({
                showClose: true,
                message: '下载失败'
            })
        })
    },
    upload (url, params) {
        return BACKEND_REQUEST.post(url, params, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export default request
