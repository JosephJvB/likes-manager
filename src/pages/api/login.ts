import type { APIRoute, AstroCookieSetOptions } from 'astro'
import { Cookies } from '../../constants'
import { submitCode } from 'jvb-spotify-client'

export const GET: APIRoute = async ({ request, redirect, cookies }) => {
  const code = new URL(request.url).searchParams.get('code')
  console.log('login', { code })

  if (!code) {
    return new Response(null, {
      status: 400,
    })
  }

  try {
    const tokenResponse = await submitCode({
      spotifyCode: code,
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      redirectUri: process.env.SPOTIFY_REDIRECT_URI!,
    })
    console.log('got token', tokenResponse)

    /**
     * todo: get user profile and store id cookie too.
     */

    cookies.set(Cookies.SpotifyToken.name, tokenResponse.access_token, {
      maxAge: Cookies.SpotifyToken.maxAge,
      path: '/',
      secure: true,
      sameSite: true,
      httpOnly: false,
      /**
       * astros typing makes optional fields required. Ruh roh Raggy.
       */
    } as AstroCookieSetOptions)

    return redirect(`/`, 302)
  } catch (error) {
    console.error('oopy doopy', error)

    return new Response(error?.toString() ?? 'oops!', {
      status: 500,
    })
  }
}
