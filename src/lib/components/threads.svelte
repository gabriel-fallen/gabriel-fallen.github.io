<script>
  import { threads, active } from '$lib/threads';

  const toggle = (t) => {
    if ( $active.includes(t) ) active.update(as => [...as.filter(a => a !== t)]);
    else if ( threads.includes(t) ) active.update(as => [...as, t]);
  }
</script>

<section class="section">
  <h2 class="title">Threads</h2>

  <div class="tags">
    {#each threads as t}
      <button class={($active.includes(t)) ? "tag is-hoverable is-dark" : "tag is-is-hoverable"} onclick={() => toggle(t)}>{t}</button>
    {/each}
  </div>
</section>
