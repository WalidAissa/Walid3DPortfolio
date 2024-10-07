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
  azza,
  coursechamp,
  plms,
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
  deans,
  ecsess,
  eus,
  mcgill,
  mitacs,
  motorola,
  mpma,
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
      id: "leadership",
      title: "Leadership",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Computer Engineering Third-Year Representative",
      icon: ecsess,
    },
    {
      title: "McGill Product Management Association Vice President",
      icon: mpma,
    },
    {
      title: "Trustee of the Engineering Undergraduate Society",
      icon: eus,
    },
    {
      title: "Associate Consultant in Web3",
      icon: penrose,
    },
  ];

  const info = [
    {
      title: "3.9 CGPA Third-Year Engineering Student",
      icon: mcgill,
    },
    {
      title: "Mitacs Research Scholarship Recipient",
      icon: mitacs,
    },
    {
      title: "Motorola Foundation Scholarship Recipient",
      icon: motorola,
    },
    {
      title: "Dean's Honour List Nominee",
      icon: deans,
    },
  ];
  
  const technologies = [
    //{ name: "HTML 5", icon: html },
    //{ name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    //{ name: "TypeScript", icon: typescript },
    { name: "React JS", icon: reactjs },
    //{ name: "Redux Toolkit", icon: redux },
    //{ name: "Tailwind CSS", icon: tailwind },
    { name: "Angular", icon: angular },
    { name: "Node JS", icon: nodejs },
    //{ name: "MongoDB", icon: mongodb },
    //{ name: "Three JS", icon: threejs },
    //{ name: "Git", icon: git },
    //{ name: "GitHub", icon: github },
    { name: "AWS", icon: aws },
    { name: "Azure", icon: azure },
    { name: "Python", icon: python },
    { name: "Java", icon: java },
    { name: "C++", icon: cplusplus },
    { name: "Linux", icon: linux },
    //{ name: "Solidity", icon: solidity },
    { name: "Spring Boot", icon: springboot },
    { name: "PostgreSQL", icon: postgresql },
    //{ name: "SQL", icon: sql },
    //{ name: "Docker", icon: docker },
    //{ name: "PowerBI", icon: powerbi },
    //{ name: "Postman", icon: postman },
    //{ name: "Jacoco", icon: jacoco },
    { name: "Scikit", icon: scikit },
    //{ name: "Pandas", icon: pandas },
    { name: "PyTorch", icon: pytorch },
    //{ name: "Blender", icon: blender },
    //{ name: "Cinema 4D", icon: cinema4d },
    //{ name: "Unity", icon: unity },
    //{ name: "VHDL", icon: vhdl },
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
      name: "Azza",
      description:
        "Q/A conversational agent leveraging the LLM BERT for natural language processing and question answering, fine-tuned on the SQuAD 2.0 Dataset to achieve human-level performance",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: azza,
      source_code_link: "https://github.com/WalidAissa/Azza",
    },
    {
      name: "CourseChamp",
      description:
        "Have you ever been unsure about your next semester of ECSE courses? ClassChamp is the one-stop-shop for all your course concerns. Every ECSE course will have an individual page with the official course description, with associated ratings such as difficulty and tutorial helpfulness, tags, student reviews, a typical grade breakdown and grade breakdown by major.",
      tags: [
        {
          name: "springboot",
          color: "blue-text-gradient",
        },
        {
          name: "vue.js",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
      ],
      image: coursechamp,
      source_code_link: "https://github.com/WalidAissa/CourseChamp",
    },
    {
      name: "Parking Lot Management System",
      description:
        "Web application that aims to provide a fully functional Parking Lot Management System to a client, which would be the owner of the parking lot, so that it helps them coordinate tasks related to spot reservations, parking lot services, hiring of employees to name a few.",
      tags: [
        {
          name: "springboot",
          color: "blue-text-gradient",
        },
        {
          name: "vue.js",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
      ],
      image: plms,
      source_code_link: "https://github.com/WalidAissa/Parking-Lot-Management-System",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, info };