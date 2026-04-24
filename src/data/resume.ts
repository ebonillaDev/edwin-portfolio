export const DATA = {
  name: "Edwin Bonilla",
  location: "Atlanta, GA",
  contact: {
    email: "ebonilla.dev@gmail.com",
    phone: "678-333-8216",
    website: "https://edwinbonilla.com",
    resumeUrl: "/Edwin_Bonilla_Resume.pdf",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/ebonillaDev",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/edwin-bonilla1",
        icon: "linkedin",
      },
      {
        name: "Email",
        url: "mailto:ebonilla.dev@gmail.com",
        icon: "email",
      }
    ],
  },
  summary: "Software Engineer with experience in full-stack development, AI integration, and cloud DevOps. Specialized in React, TypeScript, and modern AI agentic workflows.",
  skills: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextjs" },
    { name: "TypeScript", slug: "typescript" },
    { name: "JavaScript", slug: "javascript" },
    { name: "Spring", slug: "spring" },
    { name: "GraphQL", slug: "graphql" },
    { name: "Python", slug: "python" },
    { name: "MySQL", slug: "mysql" },
    { name: "HTML", slug: "html" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "GitHub Copilot", slug: "githubcopilot" },
    { name: "Jenkins", slug: "jenkins" },
    { name: "Jest", slug: "jest" },
  ],
  experience: [
    {
      company: "JPMorgan Chase",
      role: "Software Engineer",
      period: "Feb 2024 — Oct 2025",
      technologies: ["React", "TypeScript", "GraphQL", "Jest", "Cucumber", "Split.io"],
      points: [
        "Modernized a legacy enterprise application into a responsive React platform, achieving strict ADA compliance to expand accessibility to a diverse global user base.",
        "Drove a 33% increase in feature adoption by executing A/B testing via Split.io, translating user analytics into high-conversion UI enhancements.",
        "Optimized data architecture using GraphQL persistent querying, resulting in a 20% reduction in data retrieval times.",
        "Achieved 100% test coverage using Jest and Cucumber, significantly increasing deployment confidence and application stability."
      ],
      logo: "chase"
    },
    {
      company: "United Parcel Service (UPS)",
      role: "Software Engineer Co-op",
      period: "Feb 2023 — Feb 2024",
      technologies: ["Java", "Spring Boot", "OpenAI API", "Azure DevOps", "JUnit", "Postman"],
      points: [
        "Architected a Microservices Orchestration POC integrating OpenAI LLMs to automate complex service workflows and enhance system intelligence.",
        "Engineered a Java/Spring Boot integration that increased search accuracy by 25% and slashed 'zero-result' queries by 20% through strategic backend optimization.",
        "Facilitated Agile development and CI/CD pipelines within an Azure DevOps environment to deliver high-quality software solutions.",
        "Spearheaded comprehensive REST API testing and debugging using Postman to ensure robust quality assurance."
      ],
      logo: "ups"
    }
  ],
  education: {
    school: "Georgia Gwinnett College",
    degree: "B.S. in Information Technology, Software Development",
    location: "Lawrenceville, GA",
    logo: "ggc"
  }
};