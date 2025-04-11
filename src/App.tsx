import React, { useState, useRef } from 'react'; // ← you missed `useRef`
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  FileText,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight // ← ADD these for arrow icons
} from 'lucide-react';
import ProfileImage from './img/Profile.jpg';
import ImgGenAI from './img/1.png';
import ImgMovieRec from './img/2.png';
import ImgBackgroundSubtraction from './img/3.png';
import ImgOilSpill from './img/4.png';
import ImgFishClassifier from './img/5.png';
import ImgJewelry from './img/6.png';
import ImgDryBeans from './img/7.png';






function App() {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const projectsScrollRef = useRef<HTMLDivElement>(null);

const scrollProjects = (direction: 'left' | 'right') => {
  const scrollAmount = 1000;
  if (projectsScrollRef.current) {
    projectsScrollRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }
};

  const scrollSkills = (direction: 'left' | 'right') => {
    const scrollAmount = 1550; // Increase or decrease this as needed
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  


  const portfolioData = {
    name: "Surya Vardhan Reddy Puchalapalli",
    title: "#Data Science Enthusiast",
    about: "#Graduate student in Data Science at University of Houston with a strong foundation in computer science. I build intelligent solutions, automate tasks, and visualize insights to drive impact across domains.",
    photo: ProfileImage,
    location: "Houston, TX",
    phone: "+1 (346) 628-8609",
    email: "surya.unf257@gmail.com",
    resumeLink: "/surya_resume.pdf", // Provide a public resume link here
    githubLink: "https://github.com/surya1332002",
    linkedinLink: "https://www.linkedin.com/in/suryavardhanreddypuchalapalli/",
    education: [
      {
        degree: "Masters in Engineering Data Science",
        school: "University of Houston",
        year: "Aug 2023 - Present"
      },
      {
        degree: "Bachelor of Engineering in Computer Science",
        school: "Sathyabama University",
        year: "June 2019 - June 2023"
      }
    ],
    experience: [
      {
        role: "Instructional Assistant - Technology Services and Support",
        company: "University of Houston",
        period: "Jan 2024 - Present",
        descriptions: [
          "Contributed to automating data pipelines and streamlining IT support processes, improving response times by 20% through system automation and efficient workflows, while enabling actionable insights from 100+ campus sensors via Power BI dashboards to support infrastructure decisions.",
          "Assisted in conducting network security audits and upgrading wireless infrastructure, enhancing security and optimizing performance across two data centers and 6,500 access points."
        ]
      }
    ],
    skills: [
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "R", image: "https://www.r-project.org/logo/Rlogo.png" },
      { name: "TensorFlow", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
      { name: "NumPy", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
      { name: "Pandas", image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
      { name: "Scikit-learn", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "OpenCV", image: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
      { name: "Keras", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
      { name: "Flask", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
      { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "ReactJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Streamlit", image: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.svg" },
      { name: "Shiny", image:  "https://www.r-project.org/logo/Rlogo.png" },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Visual Studio Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Google Colab", image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
      { name: "Jupyter Notebook", image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
      { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "MS Excel", image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" },
      { name: "Power BI", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Prompt Engineering", image: "https://cdn-icons-png.flaticon.com/512/2875/2875445.png" },
      { name: "AI interaction design", image: "https://cdn-icons-png.flaticon.com/512/4329/4329611.png" }
    ],
    projects: [
      {
        name: "Gen AI Cold Email Generator - (March 2025)",
        description: "Developed an LLM-powered cold email automation tool using Llama 3.3, LangChain, ChromaDB, and Streamlit, integrating web scraping to extract job postings and automate outreach, increasing efficiency by 40%. Built a vector database (ChromaDB) for semantic search of relevant case studies, enabling AI-driven personalized emails that improved client engagement by 35%.",
        image: ImgGenAI,
        link: "https://github.com/surya1332002"
      },
      {
        name: "Movie Recommendation System using KNN and Association Rule Mining – (November 2024)",
        description: "Co-developed a hybrid recommendation system using KNN and Association Rule Mining for tailored movie suggestions. Preprocessed the MovieLens 20M dataset to 3.8M rows, optimizing it for collaborative filtering and pattern discovery. Built a Shiny web app in R for real-time, user-friendly movie recommendations.",
        image: ImgMovieRec,
        link: "https://github.com/surya1332002"
      },
      {
        name: "Background Subtraction System for Real-Time Video Streams - (May 2024)",
        description: "Developed a system to separate foreground objects from static backgrounds in real-time video streams, targeting enhancements in augmented reality and surveillance applications. Delivered a user-friendly web application that supports real-time interactions and functions effectively across various digital platforms.",
        image: ImgBackgroundSubtraction,
        link: "https://github.com/surya1332002"
      },
      {
        name: "Binary Image Classification System to Identify Oil Spills in Ocean Imagery - (May 2024)",
        description: "Implemented a binary image classification system using VGG-19 CNN and various machine learning models to accurately detect and identify oil spills in ocean imagery, achieving high prediction accuracy and enhancing environmental monitoring capabilities. Developed and tested the system using a dataset of ocean images, employing data augmentation techniques and advanced image pre-processing methods to improve model performance and reliability for real-time oil spill detection and response.",
        image: ImgOilSpill,   
        link: "https://github.com/surya1332002"
      },
      {
        name: "Fish Species Classifier For Allergic People using CNN Algorithm - (March 2023)",
        description: "Categorized various kinds of fish species images collected from Kaggle and achieved 96% accuracy using deep learning methods. Developed an interactive interface that allows users to upload a picture of a fish and receive information about the fish’s species, as well as potential allergic reactions that can occur from consuming that particular fish.",
        image: ImgFishClassifier,
        link: "https://github.com/surya1332002"
      },
      {
        name: "Silver Jewelry E-Commerce Website - (April 2022)",
        description: "Developed an e-commerce web application for all kinds of silver jewelry like bracelets, necklaces and rings, designed specifically for men. As there are no other websites which sell jewelry especially for men, this website stands out to be unique and this application is developed using React framework.",
        image: ImgJewelry,
        link: "https://github.com/surya1332002"
      },
      {
        name: "Dry Bean Data Classification Using Logistic Regression - (November 2021)",
        description: "Classified different types of dry beans using different characteristics from datasets collected by Kaggle. Used logistic regression for classification and acquired 71.5% accuracy.",
        image: ImgDryBeans,
        link: "https://github.com/surya1332002"
      }
    ],
    // certifications: [
    //   { name: "Power BI", issuer: "LinkedIn", year: "Dec 2024" },
    //   { name: "OCI Generative AI Professional", issuer: "Oracle", year: "July 2024" },
    //   { name: "Machine Learning", issuer: "Cognibot", year: "Nov 2021" }
    // ],
    papers: [
      {
        title: "Fish Species Classification for Allergic People Using CNN",
        publication: "7th Int’l Conference on Computing Methodologies and Communication (ICCMC)",
        year: "Feb 2023"
      }
    ]
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];


  
  let scrollAnimationFrameId: number;

  const startScroll = (direction: 'left' | 'right') => {
    const el = document.getElementById("skills-scroll");
    if (!el) return;
  
    const step = () => {
      el.scrollBy({
        left: direction === 'right' ? 1000000 : -10000000,
      });
      scrollAnimationFrameId = requestAnimationFrame(step);
    };
  
    scrollAnimationFrameId = requestAnimationFrame(step);
  };
  
  const stopScroll = () => {
    cancelAnimationFrame(scrollAnimationFrameId);
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">{portfolioData.name}</h1>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden">
              <img
                src={portfolioData.photo}
                alt={portfolioData.name}
                className="w-full h-full object-cover object-[30%_110%]"
              />
            </div>
            <div className="md:ml-8 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                {portfolioData.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                {portfolioData.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mb-8">
                {portfolioData.about}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('education')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-600" />
        </button>
      </section>

      {/* Education & Experience Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Education & Experience</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Education</h3>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="mb-8">
                  <h4 className="text-xl font-medium">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8">Experience</h3>
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="mb-8">
                  <h4 className="text-xl font-medium">{exp.role}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500">{exp.period}</p>
                  {exp.descriptions ? (
                  <ul className="list-disc ml-5 mt-2 text-gray-600">
                  {exp.descriptions.map((item, i) => (
                  <li key={i}>{item}</li>
                  ))}
                  </ul>
                  ) : (
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-50 relative">
  <h2 className="text-3xl font-bold text-center mb-16">Skills</h2>

  <div className="relative flex items-center justify-center">
    {/* Arrows for desktop only */}
    <div
      onClick={() => scrollSkills("left")}
      className="absolute left-20 z-20 hidden md:block"
    >
      <div className="p-3 bg-white shadow-lg rounded-full cursor-pointer hover:scale-110 transition">
        <ChevronLeft size={50} className="text-gray-800" />
      </div>
    </div>

    <div
      onClick={() => scrollSkills("right")}
      className="absolute right-20 z-20 hidden md:block"
    >
      <div className="p-3 bg-white shadow-lg rounded-full cursor-pointer hover:scale-110 transition">
        <ChevronRight size={50} className="text-gray-800" />
      </div>
    </div>

    {/* Mobile Carousel - 4 at a time (2x2) */}
    <div className="md:hidden w-full overflow-x-auto px-4 scrollbar-hide">
      <div className="flex gap-4 snap-x snap-mandatory scroll-smooth">
        {
          Array.from({ length: Math.ceil(portfolioData.skills.length / 4) }, (_, i) => (
            <div
              key={i}
              className="min-w-full snap-start grid grid-cols-2 gap-4"
            >
              {portfolioData.skills.slice(i * 4, i * 4 + 4).map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white rounded-lg shadow p-3"
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          ))
        }
      </div>
    </div>

    {/* Desktop Scrollable Carousel */}
    <div className="hidden md:block w-[82%] overflow-hidden">
      <div
        ref={scrollContainerRef}
        id="skills-scroll"
        className="flex gap-8 px-8 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {portfolioData.skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 flex flex-col items-center group"
          >
            <div className="w-32 h-32 rounded-lg overflow-hidden mb-3 bg-white shadow-md flex items-center justify-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <span className="text-md font-medium text-gray-700 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



<section id="projects" className="py-20 bg-white relative">
  <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>

  <div className="relative flex items-center justify-center">
    {/* Desktop Arrows */}
    <div
      onClick={() => scrollProjects('left')}
      className="absolute left-6 z-20 hidden md:block"
    >
      <div className="p-3 bg-white shadow-lg rounded-full cursor-pointer hover:scale-110 transition">
        <ChevronLeft size={40} className="text-gray-800" />
      </div>
    </div>

    <div
      onClick={() => scrollProjects('right')}
      className="absolute right-6 z-20 hidden md:block"
    >
      <div className="p-3 bg-white shadow-lg rounded-full cursor-pointer hover:scale-110 transition">
        <ChevronRight size={40} className="text-gray-800" />
      </div>
    </div>

    {/* Mobile: 1x2 Cards per swipe group */}
    <div className="md:hidden w-full overflow-x-auto px-4 scrollbar-hide">
      <div className="flex gap-6 snap-x snap-mandatory scroll-smooth">
        {
          Array.from({ length: Math.ceil(portfolioData.projects.length / 2) }, (_, i) => (
            <div
              key={i}
              className="min-w-full snap-start grid grid-cols-1 gap-6"
            >
              {portfolioData.projects.slice(i * 2, i * 2 + 2).map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                  <div className="mt-4 text-blue-600 text-sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                      View on GitHub <Github size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))
        }
      </div>
    </div>

    {/* Desktop Scrollable Layout */}
    <div className="hidden md:block w-[85%] overflow-hidden">
      <div
        ref={projectsScrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col justify-between h-[450px]"
          >
            <div>
              <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-md font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm overflow-hidden text-ellipsis line-clamp-5">
                {project.description}
              </p>
            </div>
            <div className="mt-4 text-blue-600 text-sm">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                View on GitHub <Github size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



{/* Research Papers Section */}
<section id="certifications" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16">Research & Publications</h2>
    <div className="max-w-3xl mx-auto">
      {portfolioData.papers.map((paper, index) => (
        <div key={index} className="mb-8">
          <h4 className="text-xl font-medium  text-center  hover:underline">
            <a href={paper.link} target="_blank" rel="noopener noreferrer">
              {paper.title}
            </a>
          </h4>
          <p className=" text-center text-gray-600">{paper.publication}</p>
          <p className=" text-center text-gray-500">{paper.year}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
<section id="contact" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16">Contact</h2>
    <div className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Download Resume */}
        <a
          href={portfolioData.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FileText size={24} className="text-gray-700" />
          <span className="text-gray-800">Download Resume</span>
        </a>

        {/* GitHub Profile */}
        <a
          href={portfolioData.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Github size={24} className="text-gray-700" />
          <span className="text-gray-800">GitHub Profile</span>
        </a>

        {/* LinkedIn Profile */}
        <a
          href={portfolioData.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Linkedin size={24} className="text-gray-700" />
          <span className="text-gray-800">LinkedIn Profile</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${portfolioData.email}`}
          className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Mail size={24} className="text-gray-700" />
          <span className="text-gray-800">{portfolioData.email}</span>
        </a>

        {/* Phone */}
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <Phone size={24} className="text-gray-700" />
          <span className="text-gray-800">{portfolioData.phone}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <MapPin size={24} className="text-gray-700" />
          <span className="text-gray-800">{portfolioData.location}</span>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default App;