import {
    mobile,
    react,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    firebase,
    netlify,
    npm,
    canva,
    mui,
    git,
    jti,
    albacall,
    myshop,
    youtube_clone,
    superhero,
    sda,
    sololearn,
    javascriptFCC,
    responsiveFCC,
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "HTML, CSS, JavaScript",
      icon: creator,
    },
    {
      title: "React JS Developer",
      icon: react,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "npm",
      icon: npm,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Material-UI",
      icon: mui,
    },
    {
      name: "Canva",
      icon: canva,
    },
    {
      name: "Netlify",
      icon: netlify,
    },
  ];
  
  const experiences = [
    {
      title: "CRM Specialist & Team Leader",
      company_name: "ALBACALL JSC",
      icon: albacall,
      iconBg: "#E6DEDD",
      date: "November 2015 - May 2022",
      points: [
        "Identify customers needs, clarify information, research every issue and provide solutions and/or alternatives.",
        "Review customer or client accounts, providing updates and information about billing, shipping, warranties and other account items.",
        "Seize opportunities to up-sell products when they arise.",
        "Identify customers needs, clarify information, research every issue and provide solutions and/or alternatives.",
      ],
    },
    {
      title: "Supply & Logistics Supervisor",
      company_name: "Japan International Tabacco (JTI)",
      icon: jti,
      iconBg: "#383E56",
      date: "September 2011 - October 2015",
      points: [
        "Planning and implementing strategic initiatives to improve productivity, efficiency, or other performance metrics.",
        "Reviewing inventory records to track the flow of materials through the supply chain process.",
        "Coordinating with vendors to obtain pricing information and place orders.",
        "Reporting any issues with quality control or shipping procedures to management.",
      ],
    },
    {
      title: "Warehouse Storekeeper",
      company_name: "Japan International Tabacco (JTI)",
      icon: jti,
      iconBg: "#E6DEDD",
      date: "June 2009 - August 2011",
      points: [
        "Assists with pulls, delivers textbook orders, and assists with textbook inventory.",
        "Coordinates with warehouse to insure correct pickup, delivery, and transfer warehouse inventory, textbooks, and surplus items.",
        "Loads and unloads materials, supplies, furniture, mail, and other items onto/off of delivery vehicles, pallets, skids, or lifting devices.",
        "Take annual and special inventories as directed by the Supply & Logistic Supervisor.",
      ],
    },
  ];
  
  const certificates = [
    {
      title: "Javascript from Scratch",
      company: "Software Developer Academy",
      credential: "https://app.diplomasafe.com/en-US/diploma/da41fdc652cb805870a3ac1eca83b4bb3c41f5a9e",
      image: sda,
    },
    {
      title: "Responsive Web Design",
      company: "FreeCodeCamp",
      credential: "https://www.freecodecamp.org/certification/fcc6a702070-f9e5-49b9-afa0-2c601467e1c4/responsive-web-design",
      image: responsiveFCC,
    },
    {
      title: "Javascript Algorithms and Data Structures",
      company: "FreeCodeCamp",
      credential: "https://www.freecodecamp.org/certification/fcc6a702070-f9e5-49b9-afa0-2c601467e1c4/javascript-algorithms-and-data-structures",
      image: javascriptFCC,
    },
    {
      title: "React + Redux",
      company: "Sololearn",
      credential: "https://www.sololearn.com/certificates/CT-OAQ8HHQH",
      image: sololearn,
    },
  ];
  
  const projects = [
    {
      name: "E-commerce Web",
      description:
        "Web-based Ecommerce platform that allows users to search clothing, to add to cart and to proceed to payment. Have possibility to sign up or login to have best offers.",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        {
          name: "material UI",
          color: "green-text-gradient",
        },
      ],
      image: myshop,
      source_code_link: "https://github.com/Enxhi-Hazisllari/e-commerce",
      live: "https://enxhihazisllari.netlify.app/",
    },
    {
      name: "Youtube Clone",
      description:
        "Is a video-sharing platform where users can watch. Hosts a wide variety of videos, including music videos. Users can also interact with the content by liking.",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "material UI",
          color: "green-text-gradient",
        },
      ],
      image: youtube_clone,
      source_code_link: "https://github.com/Enxhi-Hazisllari/youtube_clone",
      live: "https://youtube-enxhi.netlify.app/",
    },
    {
      name: "Superhero App",
      description:
        "This app you can easily search for information on your favorite superheroes. From biographies and origin stories to power sets and appearances, app has it all.",
      tags: [
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: superhero,
      source_code_link: "https://github.com/Enxhi-Hazisllari/Superhero-Search-App",
      live: '',
    },
  ];
  
  export { services, technologies, experiences, certificates, projects };