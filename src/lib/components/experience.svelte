<script>
  import { active_experience } from '$lib/store';
</script>

<section class="section">
  <h2 class="title">Experience</h2>

  <div class="container">
    {#each $active_experience as e}
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
