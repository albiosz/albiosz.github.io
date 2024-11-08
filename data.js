export const data = {
  header: {
    img: "./photo.jpeg",
    name: "Albert",
    surname: "Szulc",
    position: "SOFTWARE DEVELOPER",
    birthday: "17.02.1999",
    countryOfBirth: "Poland",
    email: "szulcalbert@gmail.com",
    phone: "+48 798 977 221 (Wapp)",
    phoneGerman: "+49 1632 780 614",
    linkedIn: "linkedin.com/in/a-szulc",
    location: "Bielefeld, Germany",
    github: '<a href="https://github.com/albiosz" target="_blank"> My Github </a>',
    linkToCV: '<a href="https://albiosz.github.io/">  </a>',
    introduction: "I am a software developer focused on developing clean, well-structured and extensible software. With a solid knowledge of server-side web development, I am enthusiastic about applying and advancing these skills in my future projects, while adhering to modern standards and best practices."
  },

  languages: [
    {
      language: "English",
      level: "Fluent (C1)"
    },
    {
      language: "German",
      level: "Fluent (C1)"
    },
    {
      language: "Polish",
      level: "Native speaker"
    }
    ],
    
  experience: [
    {
      position: "Software Developer",
      company: "Adgency",
      location: "Bielefeld, Germany",
      date: "05.2022 - 08.2024",
      description: [
        "At the moment I'm working on a web application for lead management. The main purpose of the project is to provide an easy-to-use platform for sales reps to keep track of the sales they are assigned to, and for managers to view the current sales results and let them adjust the distribution rules of the leads.",
        "<b>Main responsibilities:</b>",
        `<ul>
          <li>Developing a <u>full-stack</u> web application from scratch, involved in <u>project architecture</u> decision making processes </li>
          <li>Gathered requirements from decision makers and created a structured documentation of these decisions </li>
          <li>Implemented <u>50+ REST</u> endpoints using Repository, Service, Controller Separation of Concerns design with <u>80%+ test coverage</u> - <u>Go</u> </li>
          <li>Designed (ERP Diagram) and implemented a relational database with <u>30+ tables</u> - <u>PostgreSQL</u> </li>
          <li>Wrote <u>integration tests</u>, thereby ensuring compliance with business requirements </li>
          <li>Reduced code duplication by creating a separate Go module for code used by all projects in the company - <u>Go Modules</u> </li>
          <li>Prepared Docker containers for development, test and production environments - Docker, Linux </li>
          <li>Suggested and implemented <u>CI</u> action to automatically test code before merging, resulting in <u>significantly fewer bugs</u> in the production code - <u>Github Actions</u> </li> 
          <li>Implemented API plugin to standardize and simplify HTTP requests to the backend - <u>JavaScript, TypeScript, Vue.js</u> </li> 
          <li>Set up <u>database migration</u> tool - Liquibase </li>
        </ul>`
      ],
      skills: [
        "Go",
        "PostgreSQL",
        "Database design",
        "Docker",
        "Unit Tests",
        "JavaScript",
        "TypeScript",
        "Vue.js",
        "HTML5",
        "CSS3",
        "CI/CD"
      ]
    },
    {
      position: "Programming Intern",
      company: "Capgemini",
      location: "Poznań, Poland",
      date: "08.2021 - 09.2021",
      description: [
        "It was a great experience to see how a large software company works from an insight perspective. I was part of a team working on a software solution to manage water sources in Bavaria, Germany. I experienced SCRUM in practice and learned about technologies for managing large projects such as Jira and Jenkins and deepened my knowledge of Git.",
        `<ul>
          <li>Deepened my knowledge of Git by working on a large scale project </li>
          <li>Completed minor tasks in an agile team under experienced developers' supervision</li>
        </ul>
        `
      ],
      skills: [
        "Git",
        "Java",
        "Scrum",
        "Jira"
      ]
    },
    {
      position: "SAP ABAP Consultant Intern",
      company: "Sygeon",
      location: "Poznań, Poland",
      date: "03.2020 - 06.2020",
      description: [
        "I gained experience in SAP ERP and ABAP programming. The training and technologies used in the company, seemed to me outdated, so I declined the offer to continue my employment.",
      ],
      skills: []
    }
  ],

  education: [
    {
      degree: "Master of Science in Engineering",
      career: "M.Sc. in Software Design & Engineering",
      university: "FH Campus Wien",
      date: "09.2024 - Present",
      description: [
        `
        <p> <b>Program Focus: </b> Gaining comprehensive expertise in all critical stages of the data development process, from project planning to maintenance.
        <p> <b>Most relevant courses (taken up to now):</b> Advanced Software Development, Software Architectures, Cloud Computing, Requirements Engineering
        `
      ]
    },
    {
      degree: "Bachelor of Engineering",
      career: "B.Eng. in Computer Science",
      university: "Poznań University of Technology",
      date: "10.2018 - 02.2022",
      description: [
        "Graduated in February 2022 with the highest possible grade for a bachelor thesis - <b>5.0</b> (max: 5.0, min 2.0). The average grade for the whole period of studies: <b>4.64</b> (max: 5.0, min 2.0).",
        `
          <p> <b>Bachelor Thesis</b>: Developed a front-end web application using React that allows users to track the real-time position of their vehicles on an interactive map. </p>
          <p> <b>Most relevant courses:</b> Algorithms and Data Structures, Operating Systems, Object Oriented Programming, Database Systems, Computer Networks, Software Engineering, Advanced Internet Applications. </p>
        `
      ]
    },
    {
      degree: "Bachelor of Engineering (student exchange)",
      career: "Exchange student",
      university: "Bielefeld University",
      date: "03.2021 - 02.2022",
      description: [
        `<ul>
          <li>Completed the last two semesters of my Bachelor's degree at Bielefeld University as a part of the Erasmus+ exchange program </li>
          <li>This experience exposed me to a different academic structure compared to my studies in Poland </li>
          <li>Had an opportunity to take part in courses in both English and German </li>
        </ul>`,
        "<p> <b>Most relevant courses:</b> Cryptography, Cloud Computing, Data Mining. </p>"
      ]
    }
  ],

  skills: [
    {
      title: "REST API",
      description: "Know of what makes an efficient REST API based on experience gained from working on professional projects."
    },
    {
      title: "OOP (Object Oriented Programming)",
      description: "Understand the key principles, when to use them and being able to apply them in practice."
    },
    {
      title: "Relational databases",
      description: "Able to write advanced queries, modify and create tables with constraints, references etc. Have experience in relational database modelling in personal and professional projects. Worked with Oracle (academic) and Postgres (professional)."
    },
    {
      title: "Automated Testing",
      description: "Experienced in writing automated unit and integration tests. Aware of the importance of cleanly written tests."
    },
    {
      title: "Git",
      description: "Able to manage projects of varying sizes using Git. Professional experience in using branches, rebase, merge, squash etc. Aware of the importance of a clean Git history on the main branch."
    },
    {
      title: "Docker",
      description: "Created Docker images for production, testing and development purposes. Understand the importance of creating software that is independent of the operating system it runs on."
    },
    {
      title: "Go",
      description: "Developed a medium sized server application in Go and Fiber web framework. Familiar with the differences between Go and OOP languages such as Java."
    },
    {
      title: "Java SE 11",
      description: "Familiar with the concepts implemented in Java 11 acquired during an Oracle course Java SE 11 SE. Able to use in practice: streams, nested classes, concurrency, exceptions, annotations."
    },
    {
      title: "HTML",
      description: "Have experience in creating web pages using HTML."
    },
    {
      title: "CSS",
      description: "Styled web pages using basic attributes and Flexboxes. Developed responsive web pages."
    },
    {
      title: "Linux, Windows",
      description: "Experienced in using both operating systems from the level of terminal. Knowledge of setting up programming environments."
    },
    {
      title: "CI/CD",
      description: "Have first experience with GitHub Actions. Built pipelines to automate testing and deployment of an application."
    },
  ],

  projects: [
    {
      title: "Car tracker (React + Redux)",
      description: `The app was the main part of my bachelor thesis. The aim was to create an easily accessible interface for a user to access a service, created by the other part of a team. The project includes:  
      <ul>
        <li>a single-page application (React) </li>
        <li>centralized state of the application - (Redux) </li>
        <li>OpenStreetMap - (Leaflet) </li>
        <li>fetching and handling data from API - (GET, POST, SSE) </li>
      </ul>`,
      link: "https://github.com/albiosz/car-tracker-frontend",
      footnote: "The app was also deployed on Netlify",
      footnoteLink: "https://clever-wright-726f92.netlify.app"
    },
    {
      title: "Simple Text Editor (Java + Swing)",
      description: `Basic text editor with easy-to-use GUI, which allows a user to:
      <ul>
        <li>create new or open a text file, </li>
        <li>search through a file using regular expressions or plain text </li>
      </ul>`,
      link: "https://github.com/albiosz/Simple-Text-Editor"
    },
  ],

  awards: [
    "<b> Scholarship </b> for the top 10% of students at the Faculty of Computer Science | Poznan University of Technology",
  ],

  interests: [
    "mindfulness",
    "friends &amp; family time", 
    "jogging, calisthenics",
    "healthy nutrition",
  ],

  consent: "I hereby give consent for my personal data included in the application to be processed for the purposes of the recruitment process in accordance with Art. 6 paragraph 1 letter a of the Regulation of the European Parliament and of the Council (EU) 2016/679 of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
}

export function renderPage(data) {
  let template = document.getElementById('index').innerHTML;
  let rendered = Mustache.render(template, data);
  document.getElementById('index').innerHTML = rendered;
}
