<script>
  import Experience from "$lib/components/experience.svelte";
  import Projects from "$lib/components/projects.svelte";
  import Threads from "$lib/components/threads.svelte";
  import TechTable from "$lib/components/tech_table.svelte";
</script>

<section class="section is-medium">
  <h1 class="title is-size-2">Alexander Chichigin</h1>

  <div class="level">
    <div class="level-item">
      <span class="icon"><i class="fa-solid fa-envelope"></i>&nbsp;<a href="mailto:sad.ronin@gmail.com">Email</a></span>
    </div>
    <div class="level-item">
      <span class="icon"><i class="fa-brands fa-github"></i>&nbsp;<a href="https://github.com/gabriel-fallen/">GitHub</a></span>
    </div>
    <div class="level-item">
      <span class="icon"><i class="fa-brands fa-linkedin"></i>&nbsp;<a href="https://www.linkedin.com/in/alexander-chichigin-1834a938/">LinkedIn</a></span>
    </div>
    <div class="level-item">
      <span class="icon"><i class="fa-brands fa-youtube"></i>&nbsp;<a href="https://www.youtube.com/@alexchichigin">YouTube</a></span>
    </div>
  </div>

  <Threads />

  <TechTable />

  <Experience />

  <Projects />

  <section class="section">
    <h2 class="title">Education</h2>

    <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div><strong>Irkutsk State University</strong></div>
            <div>2003 — 2008</div>
          </div>
          <div class="column">
            <p><strong>Specialist Degree in Physics, summa cum laude</strong></p>
            <p>Thesis: Computational model of a recombination process in the Sun's photosphere</p>
          </div>
        </div>
    </div>
  </section>

  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Made with <a href="https://svelte.dev/">Svelte</a>,
        <a href="https://bulma.io/">Bulma</a> and
        <a href="https://fontawesome.com/">Font Awesome</a>.
        The source code is licensed
        <a href="https://opensource.org/license/mit">MIT</a>.
        The website content is licensed
        <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>.
      </p>
    </div>
  </footer>
</section>
