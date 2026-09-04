<script>
  import { onDestroy } from "svelte";
  import { projects, intersect } from '$lib/data';
  import { active } from '$lib/threads';

  let filtered = $state(projects);

  const unsubscribe = active.subscribe((threads) => {
		filtered = projects.filter(p => intersect(threads, p.threads));
	});

	onDestroy(unsubscribe);
</script>

<section class="section">
  <h2 class="title">Projects</h2>

  <div class="container">
    {#each filtered as p}
      <div class="card">
        <header class="card-header">
          <p class="card-header-title"><a href="{p.name.href}"><strong>{p.name.title}</strong></a></p>
        </header>
        <div class="card-content">
          <p class="pb-2">{@html p.text}</p>
          <div class="tags">
            {#each p.tech as t}
              <div class="tag">{t}</div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
