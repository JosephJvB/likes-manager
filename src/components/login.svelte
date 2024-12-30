<script lang="ts">
  import { parse } from 'cookie'
  import { Cookies } from '../constants'
  import { onMount } from 'svelte'

  let {
    startUrl,
  }: {
    startUrl: string
  } = $props()

  /**
   * TODO: login url from spotty-client
   */
  let loaded = $state(false)
  let isLoggedIn = $state(false)

  onMount(() => {
    const tokenFromCookie = parse(document.cookie)[Cookies.SpotifyToken.name]
    isLoggedIn = !!tokenFromCookie
    loaded = true
  })
</script>

<!-- avoid flashing UI -->
{#if loaded}
  {#if !isLoggedIn}
    <a href={startUrl}>
      <button class="bg-pink-300 px-4 py-2 rounded">log me in</button>
    </a>
  {:else}
    <p>logged in bruv</p>
  {/if}
{/if}
