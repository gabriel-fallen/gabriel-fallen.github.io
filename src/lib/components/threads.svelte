<script>
  import { threads, active } from '$lib/store';

  const toggle = (t) => {
    if ( $active.includes(t) ) active.update(as => [...as.filter(a => a !== t)]);
    else if ( threads.includes(t) ) active.update(as => [...as, t]);
  }
</script>

<section class="section">
  <h2 class="title">Threads</h2>

  <p class="pb-4">
    My career looks chaotic: many programming languages and tech stacks, from embedded to full-stack Web development
    with machine learning mixed in, from industry to academia, then back to industry — twice. And yet, there's
    a handful of threads holding this tapestry together. To make them visible, I turned them into filters or lenses
    through which you can view my work experience and projects. Click the tags below and see which jobs and projects
    share the same threads.
  </p>

  <div class="tags">
    {#each threads as t}
      <button class={($active.includes(t)) ? "tag is-medium is-hoverable is-dark" : "tag is-medium is-is-hoverable"} onclick={() => toggle(t)}>{t}</button>
    {/each}
  </div>
</section>
