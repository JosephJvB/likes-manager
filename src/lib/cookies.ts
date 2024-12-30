import { parse, serialize } from 'cookie'

export const getCookie = (cookieName: string) => {
  return parse(document.cookie)[cookieName]
}

export const deleteCookie = (cookieName: string) => {
  document.cookie = serialize(cookieName, '', {
    maxAge: -1,
  })
}
