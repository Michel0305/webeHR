import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'

export function getToken(TokenKey = 'Admin-Token') {
    return Cookies.get(TokenKey)
}

export function setToken(TokenKey = 'Admin-Token') {
    return Cookies.set(TokenKey, token)
}

export function removeToken(TokenKey = 'Admin-Token') {
    return Cookies.remove(TokenKey)
}