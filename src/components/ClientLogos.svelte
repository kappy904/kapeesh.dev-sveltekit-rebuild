<script>
  export let size;
  export let imageUrl;
</script>
{#if size === "clientSmall"}
  <div
    class='clientSmall w-32 h-32 bg-purple rounded-full p-4 relative bg-cover'
    style='background-image: url({imageUrl})'></div>
{:else if size === "clientLarge"}
  <div
    class='clientLarge w-32 h-32 bg-purple rounded-full p-6 relative bg-cover'
    style='background-image: url({imageUrl})'></div>
{:else if size === null}
  <div
    class='w-16 h-16 bg-purple rounded-full p-2 relative bg-cover'
    style='background-image: url({imageUrl})'></div>
{/if}
