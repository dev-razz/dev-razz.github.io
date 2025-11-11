// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

// Profile Image
import profile from "./assets/profile.jpg";

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import python from './assets/techstack/python.png';

// Project Images
import projectImage1 from "./assets/projects/pose_detector1.png";
import projectImage2 from "./assets/projects/audiosonic2.png";
import projectImage3 from "./assets/projects/algorithmic3.png";
import projectImage4 from "./assets/projects/scraper4.png";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rajat Agrawal",
  tagline: "I am a Software Engineer",
  img: profile,
  about: `IIT Kharagpur Grad'24 | Software Developer | Full Time @TCG Digital`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rajat-agrawal-174a2b193/",
  github: "https://www.github.com/dev-razz",
  twitter: "https://x.com/Rajat_Agrwl23",
  instagram: "https://www.instagram.com/rajat_agrawal23",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Engineering Consultant",
    Company: `TCG Digital`,
    Location: "Kolkata",
    Type: "Full Time",
    Duration: "Sep 2024 – Present",
  },
  {
    Position: "Software Engineering Intern",
    Company: `TCG Digital`,
    Location: "Kolkata",
    Type: "Internship",
    Duration: "May 2023 – Jul 2023",
  },
  {
    Position: "Frontend Developer",
    Company: `IC2C`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Aug 2021 – Sep 2021",
  },
  {
    Position: "Associate Manager",
    Company: `Entrepreneurship Cell, IIT Kharagpur `,
    Location: "Kharagpur",
    Type: "Member",
    Duration: "Apr 2020 – Apr 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "IIT Kharagpur — Biotechnology and Entrepreneurship Engineering",
    Company: "8.73 CGPA",
    Location: "Kharagpur",
    Type: "BTech",
    Duration: "2019 - 2024",
  },
  {
    Position: "Lord Buddha School — CBSE(XII) ",
    Company: `87%`,
    Location: "Kota",
    Type: "Higher Secondary",
    Duration: "2017-2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  python: python,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Pose Correction App",
    image: projectImage1,
    description: `Leveraged OpenCV and Mediapipe for accurate detection of landmarks on the human body and
    validate accurate posture during exercise`,
    techstack: "Python, Streamlit, Mediapipe, OpenCV",
    previewLink: "https://workoutapp.streamlit.app/",
    githubLink: "https://github.com/dev-razz/workoutapp",
  },
  {
    title: "AudioSonic",
    image: projectImage2,
    description: `This project converts an audio prompt to an image by first transcribing audio to text using deepgram and then
    uses generative AI`,
    techstack: "HTML/CSS, JavaScript,Next.js",
    previewLink: "https://google.com",
    githubLink: "https://github.com/dev-razz/AudioSonic",
  },
  {
    title: "Algotrader",
    image: projectImage3,
    description: `Analysed NSE price data and generated Buy/Sell Signals using RSI, MACD, etc indicators
    and Programmed Twitter and recent stock news sentiment analyzer`,
    techstack: "Python, sklearn, selenium",
    previewLink: "https://google.com",
    githubLink: "https://github.com/dev-razz/algotrade_python",
  },
  {
    title: "glassdoor scraper",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "watchwave",
    image: projectImage5,
    description: `Next js full stack video streaming platform for web shows and movies with recommendations and popular categories`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "rajatagrawal072000@gmail.com",
  phone: "+91 9460554805",
};
