import request from '@/utils/request'

export function getUserData() {
    return request({
      url: '/user/getUserData',
      method: 'get'
    })
}