export const Cookies = {
  SpotifyToken: {
    name: 'lm-token',
    maxAge: 60 * 60 * 24 * 30,
  },
} as const

export const RequiredScopes = [
  'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-read-collaborative',
]
