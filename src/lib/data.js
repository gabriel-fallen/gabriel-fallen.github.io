
export const projects = [
  {
    "name": { "href": "https://huggingface.co/spaces/gabriel-fallen/sickofmyjob", "title": "I'm sick of my job" },
    "text": "A demo of an end-to-end data-driven Web application. Showcases Machine Learning, cross-validation, model selection, loading and use in a Web app. Full source code on <a href=\"https://github.com/gabriel-fallen/attrition\">Github</a>.",
    "tech": ["Orange", "Python", "Flask", "JavaScript", "HTML5"],
    "threads": ["Web", "data analysis"]
  },
  {
    "name": { "href": "https://combineclothes.com", "title": "MixDress"},
    "text": "A Web standards-based Single Page/Mobile app suggesting outfits to combine out of clothes you have.",
    "tech": ["JavaScript", "React", "Immer.js", "PouchDB", "Android"],
    "threads": ["Web"]
  },
  {
    "name": { "href": "https://github.com/gabriel-fallen/krivine-extended", "title": "Krivine abstract machine" },
    "text": "Two implementations: one in <a href=\"https://github.com/gabriel-fallen/krivine-extended\">Haskell</a>, another in <a href=\"https://github.com/gabriel-fallen/rusty-krivine\">Rust</a>. The first one emerged out of a research question \"how much automatic parallelism can we obtain from a pure λ-calculus?\" The second one — out of an engineering question \"can we outrun Haskell with Rust?\" ",
    "tech": ["Haskell", "Rust"],
    "threads": ["programming languages", "performance", "research"]
  },
  {
    "name": { "href": "https://github.com/gabriel-fallen/rendezvous", "title": "Rendezvous" },
    "text": "A mobile and desktop GUI browser for the Gemini protocol. Flutter allows you to transfer many techniques from Web development (React-like widgets, state management, etc.) to mobile, while implementing low-level protocol exercises many programming language concepts (parsing, transformation and so on).",
    "tech": ["Dart", "Flutter", "Android"],
    "threads": ["Web", "programming languages"]
  }
];

export const experience = [
  {
    "company": "Consulting",
    "position": "Software Engineer",
    "country": "Armenia",
    "dates": "Oct 2025 - Present",
    "threads": ["Web", "performance", "programming languages"],
    "tech": [
      "TypeScript",
      "ClojureScript",
      "Claude Code",
      "Cursor",
      "FunC",
      "Tact"
    ],
    "highlights": [
      "Armenian AI Company: Architected and delivered an interactive Web 3D STEM laboratory prototype leveraging Agentic AI",
      "Armenian AI Company: Designed a DSL for lab scripts",
      "Armenian AI Company: Fine-tuned 3D models for the THREE.js framework",
      "TON Studio: Contributed to the new documentation for the VM and languages",
      "TON Studio: Established a Property-Based Testing framework with the fast-check library"
    ]
  },
  {
    "company": "Mapy Konturowe",
    "position": "GIS Software Engineer",
    "country": "Poland",
    "dates": "May 2024 - Sep 2025",
    "threads": ["Web", "data analysis"],
    "tech": [
      "Java",
      "Spring",
      "Spring Boot",
      "Python",
      "OpenStreetMap",
      "TypeScript",
      "React",
      "QGIS",
      "PostgreSQL",
      "DuckDB"
    ],
    "highlights": [
      "Integrated PayPal Subscriptions Billing system, automating recurring payments and customer lifecycle monitoring",
      "Led client-facing technical discussions to translate complex requirements into delivery milestones, ensuring contract fulfillment",
      "Designed and developed Relationship based Access Control system with Amazon Cedar",
      "Actively participated in user interviews and design of a new set of services",
      "Established and led an internal study group to deepen and broaden team's competence",
      "Made maps for 30 Day Map Challenge"
    ]
  },
  {
    "company": "Noeon Research",
    "position": "Lead Knowledge Manager",
    "country": "Japan",
    "dates": "Feb 2023 - Dec 2023",
    "threads": ["research", "performance"],
    "tech": [
      "Python",
      "NetworkX",
      "PyTest",
      "Notion"
    ],
    "highlights": [
      "Documented research, theoretical developments and code",
      "Restructured and cleaned up the Knowledge Base, systematically improving documentation metrics",
      "Established a standard document structure and templates",
      "Delivered a workshop on Formal Verification and Automated Theorem Proving",
      "Conducted benchmarking and scalability analysis of an internal Python library implementing Graph Isomorphism algorithms"
    ]
  },
  {
    "company": "Calejo",
    "position": "ML Engineer",
    "country": "Sweden",
    "dates": "Mar 2022 - Oct 2022",
    "threads": ["Web", "data analysis"],
    "tech": [
      "Julia",
      "SciML",
      "Plotly",
      "GPU",
      "DVC",
      "CI/CD"
    ],
    "highlights": [
      "Championed MLOps practices of data and model versioning to guarantee experiment reproducibility",
      "Established a Continuous Integration pipeline on top of GitHub Actions with caching; improved CI performance by 25%",
      "Designed interactive visualizations to answer client's \"what if?\" questions based on simulation",
      "Established the discipline of architectural documentation with Architecture Decision Records"
    ]
  },
  {
    "company": "TU Delft",
    "position": "PhD-student/Software Developer",
    "country": "Delft, Netherlands",
    "dates": "Jan 2021 - Dec 2021",
    "threads": ["research", "teaching", "programming languages", "Web"],
    "tech": [
      "WebDSL",
      "Java",
      "Kotlin",
      "JavaScript",
      "Docker",
      "Docker Compose"
    ],
    "highlights": [
      "Maintained and improved WebLab and Researchr",
      "Conducted research on Cloud IDEs",
      "Gave a lecture on modern techniques and tools for client-side state management",
      "Completed graduate courses on scientific writing and communication"
    ]
  },
  {
    "company": "Positive Technologies",
    "position": "Software Developer",
    "country": "Moscow, Russia",
    "dates": "Oct 2018 - Dec 2020",
    "threads": ["Web", "programming languages"],
    "tech": [
      "C#",
      "F#",
      ".NET Core",
      "ANTLR"
    ],
    "highlights": [
      "Development of a Static Application Security Testing system",
      "Researched and prototyped CFL reachability-based analysis algorithms",
      "Implemented TypeScript language support (ANTLR grammar, parse tree conversion)",
      "Trained and integrated ML.NET model into existing ANTLR-based SQL dialect detection tool; improved accuracy by 15%"
    ]
  },
  {
    "company": "Typeable.io",
    "position": "Haskell Developer",
    "country": "Moscow, Russia",
    "dates": "Apr 2017 - May 2018",
    "threads": ["Web"],
    "tech": [
      "Haskell",
      "JavaScript",
      "React",
      "PostgreSQL",
      "RabbitMQ"
    ],
    "highlights": [
      "Web application back-end development with Haskell, Servant, Yesod, PostgreSimple, RabbitMQ, Redis, PostgreSQL",
      "Implemented a Web front-end for a back-office using JavaScript, React.js, Immutable.js",
      "Integrated Amadeus flight search system through both XML Web Services and legacy APIs"
    ]
  },
  {
    "company": "Innopolis University",
    "position": "Researcher",
    "country": "Innopolis, Russia",
    "dates": "Oct 2014 - Dec 2016",
    "threads": ["research", "teaching", "Web", "programming languages"],
    "tech": [],
    "highlights": [
      "BioDynaMo joint project with Newcastle University, CERN openlab and Kazan Federal University: Lead a team of 5 students investigating the appropriate distributed computing platform",
      "Supervised two undergraduate theses on Jolie programming language",
      "Co-authored 10 papers"
    ]
  },
  {
    "company": "Kazan Federal University",
    "position": "Researcher",
    "country": "Kazan, Russia",
    "dates": "Feb 2014 - Jan 2017",
    "threads": ["research", "teaching", "performance", "data analysis"],
    "tech": [
      "Python",
      "Pandas",
      "NumPy",
      "Neuron Simulation Toolkit (NEST)",
      "Distributed Computing"
    ],
    "highlights": [
      "Lead a project on mobile users segmentation according to their interests (inferring from meta-data)",
      "Took part in international projects on Artificial Emotions and Machine Consciousness",
      "Provided training on low-level and high-performance programming in C/C++"
    ]
  },
  {
    "company": "Various",
    "position": "Software Developer",
    "country": "Kazan, Russia",
    "dates": "2007 - 2013",
    "threads": ["Web", "performance"],
    "tech": [
      "Java",
      "JavaEE",
      "Spring",
      "Spring Security",
      "WebSockets",
      "Python",
      "Clojure"
    ],
    "highlights": [
      "Web application development in Java, Clojure, Python",
      "Telecom projects in Java and C#",
      "CAD/CAM development",
      "Embedded development in C/C++",
      "Linux driver development"
    ]
  }
];

/**
 * Set intersection on arrays
 * @type {boolean}
 * @param {string[]} a
 * @param {string[]} b
 */
export function intersect(a, b) {
  for (const t of a) {
    if (b.includes(t)) return true;
  }
  return false;
}

function toYearMonth(str) {
  const r = str.trim().split(/\s+/);
  const [monthStr, yearStr] = (r.length > 1) ? r : ['Jan', r[0]];
  let year = parseInt(yearStr, 10);
  if (isNaN(year)) year = Temporal.Now.instant().toZonedDateTimeISO('UTC').year;

  const months = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
  };

  // Pass an object directly into Temporal
  return Temporal.PlainYearMonth.from({
    year: year,
    month: months[monthStr]
  });
}

export function datesDiff(str) {
  const [begin, end] = str.trim().split('-').map(toYearMonth);
  return end.since(begin);
}
