<script>
  import { derived } from 'svelte/store';
  import { datesDiff } from '$lib/data';
  import { active_experience } from '$lib/store';

  const tech_years = derived(active_experience, (es) => {
    const inst = Temporal.Now.instant().toZonedDateTimeISO('UTC');
    let table = new Map();
    es.forEach((e) => {
      const years = datesDiff(e.dates).total({unit: 'years', relativeTo: inst});
      e.tech.forEach((t) => {
        const curr = table.getOrInsert(t, 0);
        table.set(t, curr + years);
      });
    });
    return table;
  });

  const old = derived(tech_years, (table) => table.keys().filter((k) => table.get(k) >= 5));
  const mid = derived(tech_years, (table) => table.keys().filter((k) => table.get(k) < 5 && table.get(k) >= 1));
  const fresh = derived(tech_years, (table) => table.keys().filter((k) => table.get(k) < 1));
</script>

<section class="section">
  <h2 class="title">Technologies</h2>

  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th></th><th>Technologies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5+ years</td>
          <td>
            <div class="tags">
              {#each $old as t}
                <div class="tag">{t}</div>
              {/each}
            </div>
          </td>
        </tr>
        <tr>
          <td>1+ years</td>
          <td>
            <div class="tags">
              {#each $mid as t}
                <div class="tag">{t}</div>
              {/each}
            </div>
          </td>
        </tr>
        <tr>
          <td>under a year</td>
          <td>
            <div class="tags">
              {#each $fresh as t}
                <div class="tag">{t}</div>
              {/each}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
