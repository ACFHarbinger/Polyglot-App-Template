<!-- libraries/javascript/svelte/SvelteExample.svelte -->
<script>
  let count = 0;
  
  function handleClick() {
    count += 1;
  }
</script>

<div class="svelte-card">
  <h2>Svelte Component</h2>
  <button on:click={handleClick}>
    Count: {count}
  </button>
</div>

<style>
  .svelte-card {
    padding: 1rem;
    border: 1px dashed #ff3e00;
    border-radius: 8px;
    background-color: #fffaf0;
  }
  button {
    background-color: #ff3e00;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
</style>
