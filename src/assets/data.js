import Project01 from "./portfolio/1.jpg";
import Project02 from "./portfolio/2.jpg";
import Project03 from "./portfolio/3.jpg";
import Project04 from "./portfolio/4.jpg";
import Project05 from "./portfolio/5.jpg";
import Project06 from "./portfolio/6.jpg";
import Profile01 from "./About.png";
export const Projects = [
  {
    id: 1,
    img: Project01,
    title: "Shop Web Site",
    desc: "Developed a dark restaurant website with menu display, online reservations, and contact information. Focused on user-friendly navigation and aesthetic design.",
    Created: "4 Dec 2020",
    Technologies: "HTML, CSS, React",
    Role: "Frontend",
    link: "www.productlanding.com",
  },
  {
    id: 2,
    img: Project02,
    title: "Portfolio Website",
    desc: "Designed and implemented a personal portfolio website showcasing projects, skills, and work experience. Integrated dynamic animations.",
    Created: "15 Mar 2021",
    Technologies: "HTML, CSS, JavaScript",
    Role: "Full Stack",
    link: "www.myportfolio.com",
  },
  {
    id: 3,
    img: Project03,
    title: "E-Commerce Platform",
    desc: "Built an online store featuring product categories, a shopping cart, and secure checkout. Optimized performance for high user engagement.",
    Created: "12 Jul 2021",
    Technologies: "React, Redux, Firebase",
    Role: "Frontend",
    link: "www.onlinestore.com",
  },
  {
    id: 4,
    img: Project04,
    title: "Task Management App",
    desc: "Developed a task management web app allowing users to create, edit, and track tasks. Implemented responsive design for mobile and desktop devices.",
    Created: "9 Sep 2021",
    Technologies: "Vue.js, Node.js, MongoDB",
    Role: "Full Stack",
    link: "www.taskmanager.com",
  },
  {
    id: 5,
    img: Project05,
    title: "Blog Platform",
    desc: "Created a multi-user blogging platform with post creation, commenting, and profile customization features. Enhanced SEO for better visibility.",
    Created: "20 Jan 2022",
    Technologies: "WordPress, PHP, MySQL",
    Role: "Backend",
    link: "www.blogsite.com",
  },
  {
    id: 6,
    img: Project06,
    title: "Weather Forecast App",
    desc: "Implemented a weather forecasting application with real-time data and geolocation-based weather display. Integrated an API for accurate weather information.",
    Created: "3 May 2022",
    Technologies: "Angular, TypeScript, REST API",
    Role: "Frontend",
    link: "www.weatherapp.com",
  },
];

export const UserProfile = {
  img: Profile01,
  name: "Dulitha Pathum",
  role: "Frontend Web Developer",
  email: "example@gmail.com",
  PhoneNo: "0765441217",
  social: [
    "https://www.facebook.com/username",
    "https://www.twitter.com/username",
    "https://www.instagram.com/username",
    "https://www.linkedin.com/in/username",
    "https://github.com/username",
    "https://dribbble.com/username",
  ],
  about:
    "I am a passionate Frontend Web Developer with over 5 years of experience. I specialize in creating visually appealing, user-friendly websites and applications. My expertise lies in HTML, CSS, JavaScript, and various frontend frameworks.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "WordPress",
    "Bootstrap",
    "React",
    "Vue.js",
    "Python",
  ],
  experience: [
    {
      year: "2017 - 2018",
      position: "Intern Web Developer",
      company: "Tech Startup Lab",
      desc: "Assisted in developing web applications and performed debugging and testing tasks for existing systems.",
    },
    {
      year: "2018 - 2020",
      position: "Junior Web Developer",
      company: "Creative Solutions Inc.",
      desc: "Worked on creating responsive websites and collaborated with designers to ensure a seamless user experience.",
    },
    {
      year: "2020 - 2022",
      position: "Frontend Developer",
      company: "Innovative Tech",
      desc: "Implemented interactive interfaces and worked on optimizing the performance of web applications.",
    },
    {
      year: "2022 - Present",
      position: "Senior Frontend Developer",
      company: "NextGen Software Ltd.",
      desc: "Led a team of developers in building cutting-edge web applications using the latest frontend technologies.",
    },
  ],
  education: [
    {
      year: "2011 - 2013",
      degree: "Advanced Level",
      university: "ABC High School",
      desc: "Studied Mathematics, ICT, and Physics, earning distinctions in all subjects.",
    },
    {
      year: "2013 - 2017",
      degree: "Bachelor of Technology",
      university: "Toword University",
      desc: "Studied Computer Science with a focus on Software Engineering and Data Structures.",
    },
    {
      year: "2018 - 2019",
      degree: "Frontend Development Certification",
      university: "Online Code Academy",
      desc: "Completed a specialized program focusing on HTML, CSS, JavaScript, and React.",
    },
    {
      year: "2019 - 2020",
      degree: "Advanced Web Development Certification",
      university: "XYZ Tech Institute",
      desc: "Gained in-depth knowledge of modern frameworks and tools like Vue.js, Redux, and TypeScript.",
    },
  ],
};
