var data = {
  header: {
    img: "./photo.jpeg",
    name: "Albert",
    surname: "Szulc",
    position: "SOFTWARE DEVELOPER",
    birthday: "17/02/1999",
    email: "szulcalbert@gmail.com",
    phone: "+48 798 977 221 (Wapp)",
    location: "Bielefeld, Germany",
    github: '<a href="https://github.com/albiosz" target="_blank"> My Github </a>',
    linkToCV: '<a href="https://albiosz.github.io/">  </a>',
    introduction: "I am a software developer focused on developing clean, well-structured and extensible software. With a solid knowledge of server-side web development, I am enthusiastic about applying and advancing these skills in my future projects, while adhering to modern standards and best practices."
  },

  languages: [
    {
      language: "Polish",
      level: "Native speaker"
    },
    {
      language: "English",
      level: "Fluent (C1)"
    },
    {
      language: "German",
      level: "Fluent (B2)"
    }
  ],

  experience: [
    {
      position: "Web Developer",
      company: "The Sales Guys",
      location: "Bielefeld, Germany",
      date: "03.2023 - Present",
      description: [
        "At the moment I'm working on a web application for lead management. The main purpose of the project is to provide an easy-to-use platform for sales reps to keep track of the sales they are assigned to, and for managers to view the current sales results and let them adjust the distribution rules of the leads.",
        `<b>Main responsibilities:</b>
        <ul>
          <li> Gathering requirements from future users
          <li> CI/CD setup - GitHub Actions
          <li> Preparing Docker containers for development, testing and production environments - Docker 
          <li> Design and implementation of a relational database - PostgreSQL
          <li> Set up database migration tool - Liquibase
          <li> RESTful API development - Go, Fiber, Gorm
          <li> Creating unit and integration tests - Go
        </ul>`
      ],
      skills: [
        "Go",
        "Docker",
        "PostgreSQL",
        "Database design",
        "CI/CD",
        "GitHub Actions",
        "Unit Tests"
      ]
    },
    {
      position: "Web Developer",
      company: "The Sales Guys",
      location: "Bielefeld, Germany",
      date: "05.2022 - 08.2022",
      description: [
        "Involved in various internal web projects for the company.",
        'Implemented a garage configurator from scratch using only essential web technologies (HTML, CSS, JS, jQuery). The solution is available online <a target="_blank" href="https://www.mc-garagen.de/index.php?screen=products">here</a>.',
        "For the last 2,5 months, I was developing an internal tool for the company's sales reps.",
        `<b>Main responsibilities:</b> 
        <ul>
          <li> Creating a RESTful API using a modern technology stack - Go, Fiber and Gorm
          <li> Implementing views that consume the API - Vue.js
        </ul>`
      ],
      skills: [
        "REST",
        "Go",
        "JavaScript",
        "Vue.js",
        "HTML5",
        "CSS3"
      ]
    },
    {
      position: "Programming Intern",
      company: "Capgemini",
      location: "Poznań, Poland",
      date: "08.2021 - 09.2021",
      description: [
        "It was a great experience to see how a large software company works from an insight perspective. I was part of a team working on a software solution to manage water sources in Bavaria, Germany. I experienced SCRUM in practice and learned about technologies for managing large projects such as Jira and Jenkins and deepened my knowledge of Git.",
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
      degree: "Bachelor of Engineering",
      career: "Computer Science",
      university: "Poznań University of Technology",
      date: "From October 2018 to February 2022",
      description: [
        "Graduated in February 2022 with the highest possible mark for bachelor thesis - 5.0 (max: 5.0, min 2.0). The average mark during the whole period of studies: 4.64 (max: 5.0, min 2.0).",
        "<b>Most relevant courses:</b> Algorithms and Data Structures, Operating Systems, Object Oriented Programming, Database Systems, Computer Networks, Software Engineering, Advanced Internet Applications."
      ]
    },
    {
      degree: "Bachelor of Engineering (student exchange)",
      career: "Computer Science",
      university: "Bielefeld University",
      date: "From March 2021 to February 2022",
      description: [
        "During the exchange programme, I took courses in both English and German.",
        "<b>Most relevant courses:</b> Introduction to Neural Networks, Cryptography, Big Data Analytics, Cloud Computing, Machine Learning, Data Mining."
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
        <li> a single-page application (React)
        <li> centralized state of the application - (Redux)
        <li> OpenStreetMap - (Leaflet)
        <li> fetching and handling data from API - (GET, POST, SSE)
      </ul>`,
      link: "https://github.com/albiosz/car-tracker-frontend",
      footnote: "The app was also deployed on Netlify",
      footnoteLink: "https://clever-wright-726f92.netlify.app"
    },
    {
      title: "Simple Text Editor (Java + Swing)",
      description: `Basic text editor with easy-to-use GUI, which allows a user to:
      <ul>
        <li> create new or open a text file,
        <li> search through a file using regular expressions or plain text
      </ul>`,
      link: "https://github.com/albiosz/Simple-Text-Editor"
    },
  ],

  consent: "I hereby give consent for my personal data included in the application to be processed for the purposes of the recruitment process in accordance with Art. 6 paragraph 1 letter a of the Regulation of the European Parliament and of the Council (EU) 2016/679 of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
}

function renderPagge() {
  let template = document.getElementById('index').innerHTML;
  let rendered = Mustache.render(template, data);
  document.getElementById('index').innerHTML = rendered;
}
renderPagge()