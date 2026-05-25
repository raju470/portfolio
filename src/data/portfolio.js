export const personalInfo = {
  name: "Raju Kumar",
  title: "Software Engineer II",
  email: "raju470kumar@gmail.com",
  phone: "8470870402",
  linkedin: "https://linkedin.com/in/raju-kumar-shah",
  summary:
    "Full-stack software engineer with 7+ years of experience building scalable web applications and microservices. Passionate about clean architecture, performance optimisation, and mentoring teams.",
};

export const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "C++", "Core Java", "HTML", "CSS"] },
  { category: "Frontend", items: ["ReactJS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Spring Boot"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "Azure", "Linux"] },
  { category: "Tools & Others", items: ["Git", "Kafka", "Prometheus", "Grafana", "Sequelize", "DSA"] },
];

export const experience = [
  {
    company: "Concentrix Catalyst",
    role: "Software Engineer II",
    period: "Oct 2024 – Present",
    points: [
      "Helping with the migration of a legacy application to a Node.js-based system.",
      "Successfully deployed microservices utilising Docker.",
    ],
  },
  {
    company: "Tata Insights and Quants",
    role: "Software Engineer I",
    period: "Oct 2021 – Oct 2024",
    points: [
      "Designed and developed the application from scratch using Node.js, React.js, Express, Sequelize, Spring Boot, MySQL, and MongoDB.",
      "Led and mentored a team of 4 developers, guiding code quality, optimisation techniques, and best practices.",
    ],
  },
  {
    company: "Deep LogicTech India Pvt. Ltd",
    role: "Software Developer",
    period: "Jun 2019 – Oct 2021",
    points: [
      "Developed and launched customised full-stack web applications, boosting client satisfaction and project delivery speed by 25%.",
      "Implemented applications using the JAMstack framework with Monkshu, leveraging Node.js, HTML, CSS, JavaScript, and S3.",
    ],
  },
];

export const projects = [
  {
    title: "TCL Video Analytics Platform",
    description:
      "Built the backend of a video analytics platform using Node.js, MySQL, MongoDB, and Redis with a microservice architecture.",
    highlights: "40% improvement in real-time monitoring and incident management.",
    tags: ["Node.js", "MySQL", "MongoDB", "Redis", "Microservices"],
  },
  {
    title: "Rallis Seedsay",
    description:
      "Developed and deployed a portal using ReactJS, Node.js, Azure Function App, and PostgreSQL in a serverless architecture.",
    highlights: "90% accuracy in seed demand prediction. Integrated Python APIs for real-time predictions.",
    tags: ["ReactJS", "Node.js", "Azure", "PostgreSQL", "Python"],
  },
  {
    title: "Contract Management System",
    description:
      "Designed and built a full-stack web portal handling architectural design and RESTful APIs for contract management.",
    highlights: "35% improvement in process efficiency.",
    tags: ["Node.js", "Express", "MySQL", "Sequelize", "React"],
  },
  {
    title: "Teleworkr Portal",
    description:
      "Implemented a remote work management portal using JavaScript, Node.js, and Electron to manage attendance and work status.",
    highlights: "25% increase in remote work efficiency.",
    tags: ["JavaScript", "Node.js", "Electron"],
  },
  {
    title: "IBHS Web Portal",
    description:
      "Developed a web portal using the JAMstack Monkshu framework, Node.js, S3, RDS, and MySQL to facilitate transactions between insurance companies and patients.",
    highlights: "20% improvement in transaction processing speed.",
    tags: ["Node.js", "JAMstack", "MySQL", "AWS S3", "RDS"],
  },
];

export const education = [
  {
    institution: "Maharaja Agrasen Institute Of Technology (GGSIPU), Delhi",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2016 – 2019",
    score: "83.9%",
  },
];
