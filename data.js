var data = {
  header: {
    img: "./photo.jpeg",
    name: "Albert",
    surname: "Szulc",
    position: "JUNIOR SOFTWARE DEVELOPER",
    birthday: "17/02/1999",
    email: "szulcalbert@gmail.com",
    phone: "+48 798 977 221 (Whatsapp)",
    location: "Guadalajara, Mexico",
    introduction: "A diligent graduate who wants to progress in his professional career. Always ready for new challenges, helpful, and eager to learn from others."
  },

  languages: [
    {
      language: "Polish",
      level: "Native speaker"
    },
    {
      language: "English",
      level: "Proficient (C1)"
    },
    {
      language: "German",
      level: "Advanced (B2)"
    }
  ],

  experience: [
    {
      position: "Web Developer",
      company: "The Sales Guys",
      location: "Bielefeld, Germany",
      date: "From May 2022 to August 2022",
      description: [
        "Engaged in various internal projects for the company, during which I gained many new skills.",
        "Implemented a garage configurator from scratch using only essential web technologies (HTML, CSS, JS, jQuery).",
        "For the last 2,5 months, I was developing an internal tool for sellers in the company. I expanded my knowledge on how to properly create RESTful API. GO, Fiber and Gorm were utilized on the server side; Vue and Nuxt on the frontend-side."
      ]
    },
    {
      position: "Programming Intern",
      company: "Capgemini",
      location: "Poznań, Poland",
      date: "From August 2021 to September 2021",
      description: [
        "I experienced how software companies work from the insight. I was a member of a team working on software solutions for LfU Bayern.",
        "The whole team worked using SCRUM framework. I got familiar with technologies to manage huge projects like Jira and Jenkins and deepened my knowledge in using Git."
      ]
    },
    {
      position: "Internships SAP Integration Consultant",
      company: "Sygeon",
      location: "Poznań, Poland",
      date: "From March 2020 to June 2020",
      description: [
        "I experienced working in an IT company, learned how to program in ABAP and, in the end, created a small frontend-app for ordering pizza.",
      ]
    }
  ],

  education: [
    {
      degree: "BEng",
      career: "Computer Science",
      university: "Poznań University of Technology",
      date: "From October 2018 to February 2022",
      description: [
        "Graduated in February 2022 with the highest possible mark for bachelor thesis - 5.0 (max: 5.0, min 2.0). The average mark during the whole period of studies: 4.64 (max: 5.0, min 2.0)."
      ]
    },
    {
      degree: "BEng (student exchange)",
      career: "Computer Science",
      university: "Bielefeld University",
      date: "From March 2021 to February 2022",
      description: [
        "During the exchange programme, I took courses in both English and German. Subjects: Introduction to Neural Networks, Cryptography, Big Data Analytics, Cloud Computing, Machine Learning, Data Mining."
      ]
    }
  ],

  skills: [
    {
      title: "OOP (Object Oriented Programming)",
      description: "Understanding and ability to apply: classes, inheritance, interfaces, abstraction, encapsulation, polymorphism."
    },
    {
      title: "REST API",
      description: "Knowledge of what characterizes efficient REST API based on experience gained during working on professional projects."
    },
    {
      title: "Databases",
      description: "Ability to write advanced queries, modify and create tables with constraints, references etc. Familiar and experienced with modelling databases in own projects."
    },
    {
      title: "ORM (Object-relational mapping)",
      description: "Skills to implement a relational database from a schema with all types of dependencies between relations. Spring Data JPA"
    },
    {
      title: "Java",
      description: "Abilty to use in practice: streams, nested classes, concurrency, exceptions, annotations, JDBC."
    },
    {
      title: "React + Redux",
      description: "Know-how to build single-page applications using React library with centralized state using Redux. Both class and functional approaches are familiar to me. Experience in using Hooks."
    },
    {
      title: "Javascript + JQuery",
      description: "Fluency in using basic and more advanced structures of the language. Experienced in using most of the concepts in ES6. Ability to write basic asynchronous code."
    },
    {
      title: "HTML",
      description: "Experience in creating web pages structure using HTML. Knowledge of how to make a webpage responsive using HTML frameworks e. g. Foundation Framework."
    },
    {
      title: "CSS",
      description: "Knowledge and some experience in styling webpages using basic attributes and Flexboxes."
    },
    {
      title: "Git",
      description: "Ability to manage projects of different sizes using Git."
    },
    {
      title: "Docker",
      description: "First experience in using containers and creating images, collected in online courses and then applied in my own project"
    },
    {
      title: "Windows, Linux",
      description: "Fluency in using both operating systems from the level of terminal. Knowledge of setting up programming environments."
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
      footnoteLink: "﻿https://clever-wright-726f92.netlify.app"
    },
    {
      title: "Car tracker backend (Spring + Postgresql) - work in progress",
      description: "Project developed in parallel with learning Spring. The aim is to build a fully working API with a database for the previously built frontend.",
      link: "https://github.com/albiosz/car-tracker-backend"
    },
    {
      title: "Simple Text Editor (Java + Swing)",
      description: `Basic text editor with easy to use GUI, which allows a user to:
      - create new or open a text file,
      - search through a file using regular expressions or plain text`,
      link: "https://github.com/albiosz/Simple-Text-Editor"
    },
    {
      title: "Evolutionary Steering Behaviour (Python)",
      description: "In this project, I utilized a genetic algorithm to evolve the best attributes that allow entities to live longer.",
      link: "https://github.com/albiosz/Evolutionary-Steering-Behaviour"
    },
  ],

  assets: [
    {
      title: "Easy to collaborate with",
      description: "I am an open-minded person, I am eager to discuss and compare solutions about programming problems with co-workers." 
    },
    {
      title: "Searching for solutions",
      description: "I am not used to giving up. If I am not able to solve a problem, I search its answer by any means necessary." 
    },
    {
      title: "Consistency",
      description: "I am aware that it is important to work regularly on tasks. I systematically comply with schedules, in case additional time is needed for unexpected problems." 
    }
  ],

  interests: [
    {
      title: "Traveling and socializing",
      description: "I love visiting new places and getting to know new people with a different perspective on life than my own."
    },
    {
      title: "Sport",
      description: "Swimming and jogging are two things which always motivate me to sooth my mind when facing an issue that seems unsolvable."
    }
  ],

  consent: "I hereby give consent for my personal data included in the application to be processed for the purposes of the recruitment process in accordance with Art. 6 paragraph 1 letter a of the Regulation of the European Parliament and of the Council (EU) 2016/679 of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
}

function renderPagge() {
  let template = document.getElementById('index').innerHTML;
  let rendered = Mustache.render(template, data);
  document.getElementById('index').innerHTML = rendered;
  console.log("Rendered")
}
renderPagge()