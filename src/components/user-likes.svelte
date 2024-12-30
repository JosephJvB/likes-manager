<script lang="ts">
  import type { SpotifyPlaylistTrack } from 'jvb-spotify-client'

  const {
    userLikes,
  }: {
    userLikes: SpotifyPlaylistTrack[]
  } = $props()
</script>

<table class="text-left max-w-full">
  <tbody>
    <tr>
      <th>song title</th>
      <th>added at</th>
    </tr>
    {#each userLikes as { added_at, track }}
      <tr>
        <td>{track.name}</td>
        <td>{added_at}</td>
      </tr>
    {/each}
  </tbody>
</table>
