export const DefaultCookieProperties = {
  path: '/',
  secure: true,
  /**
   * TODO: not working on localhost atm.
   * get this working. Might need a local https server?
   */
  // sameSite: 'strict',
  httpOnly: false,
} as const

export const Cookies = {
  Token: {
    name: 'lm-token',
    properties: {
      maxAge: 60 * 60 * 24 * 30,
      ...DefaultCookieProperties,
    },
  },
} as const

export const RequiredScopes = [
  'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-email',
  'user-read-private',
  'user-library-read',
]
