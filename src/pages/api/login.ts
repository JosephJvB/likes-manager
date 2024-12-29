import type { APIRoute, AstroCookieSetOptions } from 'astro'
import { Cookies } from '../../constants'

export const GET: APIRoute = async ({ request, redirect, cookies }) => {
  const code = new URL(request.url).searchParams.get('code')
  console.log('login', { code })

  if (!code) {
    return new Response(null, {
      status: 400,
    })
  }

  try {
    /**
     * TODO: from SpotifyClient
     */
    // const tokenResponse = await submitCode(code)
    // console.log('got token', tokenResponse)
    const tokenResponse = {
      access_token: code,
    }

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
