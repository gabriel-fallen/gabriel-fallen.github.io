<script>
  import { onDestroy } from 'svelte';
  import { experience, intersect } from '$lib/data';
  import { active } from '$lib/threads';

  let filtered = $state(experience);

  const unsubscribe = active.subscribe((threads) => {
		filtered = experience.filter(e => intersect(threads, e.threads));
	});

	onDestroy(unsubscribe);
</script>

<section class="section">
  <h2 class="title">Experience</h2>

  <div class="container">
    {#each filtered as e}
      <div class="columns">
        <div class="column is-one-third">
          <div><strong>{e.company}</strong></div>
          <div>{e.dates}</div>
        </div>
        <div class="column">
          <p><strong>{e.position}</strong></p>
          <ul class="pb-2">
            {#each e.highlights as h}
              <li><span class="icon is-small"><i class="fa-solid fa-minus"></i></span>&nbsp;{h}</li>
            {/each}
          </ul>
          <div class="tags">
            {#each e.tech as t}
              <div class="tag">{t}</div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
