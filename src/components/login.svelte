<script lang="ts">
  import { parse } from 'cookie'
  import { Cookies } from '../constants'
  import { onMount } from 'svelte'

  /**
   * TODO: login url from spotty-client
   */
  const loginUrl = new URL(window.location.href)
  loginUrl.searchParams.append(Cookies.SpotifyToken.name, '123')

  let loaded = false
  let isLoggedIn = false

  onMount(() => {
    const tokenFromCookie = parse(document.cookie)[Cookies.SpotifyToken.name]
    isLoggedIn = !!tokenFromCookie
    loaded = true
  })
</script>

<!-- avoid flashing UI -->
{#if loaded}
  {#if !isLoggedIn}
    <a href={loginUrl.toString()}>
      <button class="bg-pink-300 px-4 py-2 rounded">log me in</button>
    </a>
  {:else}
    <p>logged in bruv</p>
  {/if}
{/if}
