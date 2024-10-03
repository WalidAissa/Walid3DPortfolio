import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  robotics,
  mais,
  penrose,
  carrent,
  jobit,
  tripguide,
  angular,
  aws,
  azure,
  blender,
  cplusplus,
  cinema4d,
  jacoco,
  java,
  linux,
  pandas,
  postgresql,
  postman,
  powerbi,
  python,
  pytorch,
  scikit,
  solidity,
  springboot,
  sql,
  unity,
  vhdl,
  vuejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "React JS", icon: reactjs },
    { name: "Redux Toolkit", icon: redux },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Angular", icon: angular },
    { name: "Node JS", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "Three JS", icon: threejs },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "AWS", icon: aws },
    { name: "Azure", icon: azure },
    { name: "Python", icon: python },
    { name: "Java", icon: java },
    { name: "C++", icon: cplusplus },
    { name: "Linux", icon: linux },
    { name: "Solidity", icon: solidity },
    { name: "Spring Boot", icon: springboot },
    { name: "PostgreSQL", icon: postgresql },
    { name: "Docker", icon: docker },
    { name: "PowerBI", icon: powerbi },
    { name: "Postman", icon: postman },
    { name: "Jacoco", icon: jacoco },
    { name: "Scikit", icon: scikit },
    { name: "Pandas", icon: pandas },
    { name: "PyTorch", icon: pytorch },
    { name: "Blender", icon: blender },
    { name: "Cinema 4D", icon: cinema4d },
    { name: "Unity", icon: unity },
    { name: "VHDL", icon: vhdl },
    { name: "VueJS", icon: vuejs },
  ];
  
  const experiences = [
    {
      title: "Software Divison Senior",
      company_name: "McGill Robotics",
      icon: robotics,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Current",
      points: [
        "Collaborated for 3+ years in a team of 100+ students in a Scrum environment contributing to the development of a competitive autonomous space rover — participating in bi-weekly sprint planning, and retrospective meetings",
        "Developed the UI backend using ROS, PyQt5, and OpenCV, allowing control of the arm, wheels, and cameras remotely; later migrated the UI to an AngularJS / Node.js web application, decreasing latency by 45 %",
        " Implemented various path tracking / reverse kinematics techniques to ensure the rover’s safety (GJK distance algorithm, oriented bounding boxes, etc), lowering the number of collisions by 30 %"
      ],
    },
    {
      title: "MAIS 202 Member",
      company_name: "McGill Artificial Intelligence Society",
      icon: mais,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - May 2023",
      points: [
        "Completed an intensive ten-week program focused on the fundamentals of machine learning, covering both theoretical concepts and practical applications in a hands-on learning environment",
        "Developed a Clothing Item Classifier utilizing the Python libraries pandas, NumPy, and scikit-learn to construct a CNN with 92% accuracy; selected as the best project at the McGill AI Project Fair among 15 others",
        "Applied advanced machine learning techniques, including regression analysis, classification algorithms, neural networks, and transformers, to solve real-world problems and enhance predictive modeling capabilities"
      ],
    },
    {
      title: "Associate Consultant",
      company_name: "Penrose Partners",
      icon: penrose,
      iconBg: "#E6DEDD",
      date: "May 2024 - Current",
      points: [
        "Conducted market research and analysis for high-profile clients such as the Government of Bermuda, focusing on blockchain technology and decentralized finance (DeFi) sectors",
  "Collaborated with 3iQ, a leading Canadian asset management firm, to develop marketing and outreach plans for their blockchain financial products, driving a 30% increase in institutional inquiries and raising AUM by $15M",
  "Supported Nayms, an innovative insurance platform on the blockchain, in refining their go-to-market strategy, resulting in a 40% improvement in user acquisition and projected $50M in insured assets by Q4 2024"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };