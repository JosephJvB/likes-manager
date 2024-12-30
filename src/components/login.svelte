<script lang="ts">
  import type { SpotifyProfile } from 'jvb-spotify-client'
  import { Cookies } from '../constants'
  import { getCookie } from '../lib/cookies'

  let {
    startUrl,
    userProfile,
  }: {
    startUrl: string
    userProfile: SpotifyProfile | null
  } = $props()

  const token = getCookie(Cookies.Token.name)
  const isLoggedIn = !!token && !!userProfile

  const profilePic = userProfile?.images[0]?.url
</script>

<div class="flex justify-center">
  {#if !isLoggedIn}
    <a href={startUrl}>
      <button class="bg-pink-300 px-4 py-2 rounded">log me in</button>
    </a>
  {:else}
    <div class="flex flex-col">
      {#if profilePic}
        <img
          src={profilePic}
          class="mx-auto rounded-full h-20 w-20 object-cover"
        />
      {/if}
      <p>Logged in as: {userProfile.display_name}</p>
    </div>
  {/if}
</div>
