import { data as fullData, renderPage } from '../data.js';

const onePageData = {
  header: {
    name: fullData.header.name,
    surname: fullData.header.surname,
    birthday: fullData.header.birthday,
    introduction: fullData.header.introduction,
  },

  sidebar: {
    linkToCV: fullData.header.linkToCV,
    email: fullData.header.email,
    github: "github.com/albiosz",
    phone: fullData.header.phone,
    linkedIn: fullData.header.linkedIn
  },

  languages: fullData.languages,

  skills: [
    {
      title: "backend",
      skills: ["Go"],
    }, {
      title: "database",
      skills: ["SQL", "Relational Databases", "Data Modeling", "PostgreSQL"],
    }, {
      title: "operating systems",
      skills: ["Linux"],
    }, {
      title: "testing",
      skills: ["Unit", "Integration"],
    }, {
      title: "miscellaneous",
      skills: ["Git", "Docker", "REST"],
    }, {
      title: "frontend", 
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "Bootstrap"],
    }
  ],

  experience: fullData.experience.slice(0, 2).map(e => {
    return {
      position: e.position,
      company: e.company,
      location: e.location,
      start: e.date.split(' - ')[0],
      end: e.date.split(' - ')[1],
      responsibilities: e.description[e.description.length - 1],
    }
  }),

  education: fullData.education.slice(0,-1).map(e => {
    return {
      start: e.date.split(' - ')[0],
      end: e.date.split(' - ')[1],
      career: e.career,
      university: e.university,
      description: e.description[e.description.length - 1]
    }  
  }),

  awards: fullData.awards,
  interests: fullData.interests,
  
  studentExchange: [
    "<b> Bielefeld University </b>",
    "03.2021 - 02.2022",
    "<b>Most relevant courses:</b> Cryptography, Cloud Computing, Data Mining. </p>"
  ]
}

renderPage(onePageData)