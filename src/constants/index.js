import { s } from "maath/dist/misc-7d870b3c.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  larbi,
  starbucks,
  esi,
  stockkeep,
  gamesooq,
  smartcity,
  naftal,
  fiverr,
  lycee,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI and Data Science Student",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "State Engineering Diploma in computer science",
    company_name: "ESI - Sidi Bel Abbes",
    icon: esi,
    iconBg: "#ffffff",
    date: "September 2021 – Present",
    points: [
      "Currently a final year student specializing in Artificial Intelligence and Data Science after three foundational years in Computer Science.",
      "Developed hands on experience in machine learning, deep learning, data preprocessing, and data visualization through academic projects and coursework.",
      "Worked on multiple projects using React.js and Flutter, applying modern frontend development practices.",
      "Applied key AI concepts such as supervised and unsupervised learning, neural networks, and model evaluation.",
      "Gained strong experience in teamwork and collaboration within student groups and multidisciplinary teams.",
      "Learned to work effectively under pressure and manage tight project deadlines.",
      "Applied Agile methodologies to structure work, manage tasks, and ensure continuous delivery during academic and extracurricular projects.",
      "Focused on responsive and user friendly design principles to deliver high quality applications.",
    ],
  },  
  {
    title: "Scientific Baccalaureat Diploma",
    company_name: "Lycée Dahmane Ahmed - Alger",
    icon: lycee,
    iconBg: "#ffffff",
    date: "September 2018 - June 2021",
    points: [
      "Graduated with high distinction, achieving a final average of 18.32/20.",
      "Completed secondary education in the scientific stream with strong focus on mathematics, physics, and natural sciences.",
      "Developed strong analytical thinking and problem-solving skills, laying the foundation for future studies in computer science and AI.",
      "Engaged in various scientific projects and collaborative activities to enhance critical thinking and academic performance.",
    ],
  }  
];

const work = [
  ,
  {
    title: "Freelance Web & Mobile Developer and UI/UX Designer",
    company_name: "Fiverr",
    icon: fiverr, 
    iconBg: "#ffffff",
    date: "June 2023 – Present",
    points: [
      "Worked on diverse freelance projects in web and mobile development using React.js and Flutter.",
      "Designed and built responsive user interfaces, applying modern UI/UX best practices.",
      "Collaborated with clients to define requirements, iterate on designs, and deliver tailored solutions.",
      "Managed project timelines, revisions, and deployments independently in a remote setting.",
      "Used design tools like Figma and Adobe XD to create interactive prototypes and mockups.",
      "Gained strong experience in agile style workflows and efficient communication with stakeholders.",
    ],
  },
  {
    title: "AI and Data Science Intern",
    company_name: "NAFTAL",
    icon: naftal,
    iconBg: "#ffffff",
    date: "September 2024 – October 2024",
    points: [
      "Completed a 30 day internship within the DCSI (IT Systems Department) of NAFTAL.",
      "Analyzed the financial health of the company using historical data from 2010 to 2022.",
      "Computed key financial ratios (profitability, liquidity, solvency) using Python, pandas, and NumPy.",
      "Created interactive dashboards in Power BI to visualize trends and communicate insights clearly.",
      "Built and evaluated predictive models using linear and multiple linear regression to forecast net income.",
      "Used tools like Anaconda, Scikit-learn, and data visualization libraries to support data science workflows.",
      "Strengthened understanding of financial analysis, regression modeling, and data-driven decision making in an enterprise context.",
    ],
  }
];

const testimonials = [
  {
    testimonial: "You're a talented friend and an amazing frontend developer. Your UI/UX designs are always clean, creative, and user friendly. Proud of your work keep going.",
    name: "Larbi Achraf",
    designation: "Full Stack Web Developer\n& AI Engineer",
    linkedinUrl: "https://www.linkedin.com/in/larbi-achraf-01902a283/",
    image: larbi,
  },
  
];

const projects = [
  {
    name: "Stockkeep",
    description:
      "Web and mobile platform for managing store inventory, enabling users to track, request, validate, and approve stock movements and orders across multiple roles, ensuring efficient and structured supply chain operations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: stockkeep,
    source_code_link: "https://github.com/Islemourred/Stockkeep_FullProject",
  },
  {
    name: "GameSooQ",
    description:
      "Mobile app with landing page and admin dashboard that allows users to exchange video games securely, featuring real time chat, exchange tracking. All managed through a modern dashboard for monitoring user activity and app statistics.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "FireBase",
        color: "pink-text-gradient",
      },
    ],
    image: gamesooq,
    source_code_link: "https://github.com/Islemourred/GameSooQ_Web",
  },
  {
    name: "SmartCity",
    description:
      "AI-powered web platform with real time vehicle detection and speed violation monitoring using YOLO , integrated with a React dashboard to visualize traffic incidents, track license plates, and display smart city statistics for efficient traffic law enforcement.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Yolo",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: smartcity,
    source_code_link: "https://github.com/Islemourred/Project_2CS",
  },
];

export { services, technologies, experiences, work , testimonials, projects };
