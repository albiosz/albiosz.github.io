import { data as fullData, renderPage } from '../data.js';

const onePageData = {
  header: {
    name: fullData.header.name,
    surname: fullData.header.surname,
    introduction: "<p> I am a software developer focused on developing clean, well-structured and extensible software. \
    My experience in both professional and academic projects has shown me the critical importance of proper software design for extensibility, maintainability and the overall success of the final product. </p> \
    <p> Therefore, I am eager to continue my education and deepen my knowledge in this field to contribute more effectively to efficient software solutions.</p>",
  },

  sidebar: {
    birthday: fullData.header.birthday,
    countryOfBirth: fullData.header.countryOfBirth,
    location: fullData.header.location,
    linkToCV: fullData.header.linkToCV,
    email: fullData.header.email,
    github: "github.com/albiosz",
    phone: fullData.header.phoneGerman,
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
      skills: ["Git", "Docker"],
    }, {
      title: "frontend", 
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js"],
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

  education: fullData.education.map(e => {
    return {
      start: e.date.split(' - ')[0],
      end: e.date.split(' - ')[1],
      career: e.career,
      university: e.university,
      description: e.description
    }  
  }),

  awards: fullData.awards,
  interests: fullData.interests,

  // achievements: scholarship for the best 10% of students
}

renderPage(onePageData)