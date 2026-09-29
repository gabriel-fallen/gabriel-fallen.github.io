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
  <h2 class="title">Tying the knot</h2>

  <p class="pb-4">
    The threads are not disjoint either. All of them stem from my innate curiosity. At school, I was curious
    about how computers work, and that led me to learn x86 Assembly and microarchitecture, OS and
    file systems, network protocols and services. This helped me develop performance engineering skills.
    Curiosity about programming languages drove me to learn a bunch, and to study how they are made:
    parsers, interpreters, compilers, virtual machines, GC. Many of these topics lead to programming
    language semantics, which is a branch of computer science and, ultimately, mathematics. And within
    mathematics, I discovered statistics and data analysis, which connected me back with performance and
    systems engineering.
  </p>
  <p class="pb-4">
    Persistent, systematic curiosity is what we call research. The appeal of deep research into complex topics
    attracted me to university culture. And when you learn a lot about something you're passionate about,
    that drives you to share it with others, to teach people. For with a university offers both ample
    opportunity and professional training.
  </p>
  <p class="pb-4">
    The modern Web provides a technological playground where different programming languages compete against
    one another, and the same languages are stretched from back-end to front. Optimising JavaScript for a JIT compiler,
    orchestrating microservices, building high-throughput data pipelines for complex transformations, and everything
    in between offer many opportunities to apply both state-of-the-art research and solid engineering.
    I am still curious about what is possible with WebAssembly, WebGPU, edge computing, edge machine learning,
    and other emerging technologies.
  </p>
</section>

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
