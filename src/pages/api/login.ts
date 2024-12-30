import type { APIRoute, AstroCookieSetOptions } from 'astro'
import { Cookies } from '../../constants'
import { submitCode, getMyProfile } from 'jvb-spotify-client'

export const GET: APIRoute = async ({ request, redirect, cookies }) => {
  const code = new URL(request.url).searchParams.get('code')

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

    cookies.set(Cookies.Token.name, tokenResponse.access_token, {
      ...Cookies.Token.properties,
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
