<script>
  import { active_projects } from '$lib/store';
</script>

<section class="section">
  <h2 class="title">Projects</h2>

  <div class="container">
    {#each $active_projects as p}
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
