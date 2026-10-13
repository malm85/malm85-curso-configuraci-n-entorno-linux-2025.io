import { PortfolioConfig } from './portfolio.example';

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Miguel Angel Lopez Martinez",
      title: "Technical Support",
      subtitle: "Cibersecurity",
      greeting: "Hello, I'm",
      profilePhoto: "/malm85/malm85-curso-configuraci-n-entorno-linux-2025.io/profile-photo.jpg",
      cvUrl: "/path-to-your-cv.pdf"
    },
    about: {
      description: "IT and security professional with 15 years of experience in defense",
      experience: "Technical support Engineer",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Years",
          description: "Professional Experience"
        },
        {
          icon: "Users",
          title: "20+ Projects",
          description: "Successfully Delivered"
        },
        {
          icon: "Lightbulb",
          title: "Modern Tech",
          description: "Latest Technologies"
        },
        {
          icon: "Award",
          title: "Quality Focus",
          description: "Best Practices"
        }
      ]
    },
    projects: [
      {
        title: "Project Name",
        description: "Describe your project here. What it does, what problems it solves, and what technologies you used.",
        image: "/malm85/malm85-curso-configuraci-n-entorno-linux-2025.io/project-ecommerce.jpg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/malm85/project",
        demo: "https://project-demo.vercel.app"
      }
      // Add more projects as needed
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 }
          ]
        },
        {
          title: "Tools & Others",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Miguel Angel Lopez Martinez - Technical Support",
      description: "Personal portfolio of Miguel Angel Lopez Martinez, a technical support specializing in modern web technologies.",
      keywords: ["technical support", "web development", "portfolio", "react", "typescript"]
    }
  },
  es: {
    personal: {
      name: "Miguel Angel Lopez Martinez",
      title: "Tecnologo en Sistemas",
      subtitle: "Soporte Tecnico",
      greeting: "Hola, soy",
      profilePhoto: "/malm85/malm85-curso-configuraci-n-entorno-linux-2025.io/profile-photo.jpg",
      cvUrl: "/path-to-your-cv.pdf"
    },
    about: {
      description: "Especialista en Ciberseguridad y soporte tecnico",
      experience: "Soporte tecnico, gestion de sistemas, capacitacion tecnologica",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Años",
          description: "Experiencia Profesional"
        },
        {
          icon: "Users",
          title: "20+ Proyectos",
          description: "Entregados Exitosamente"
        },
        {
          icon: "Lightbulb",
          title: "Tecnología Moderna",
          description: "Últimas Tecnologías"
        },
        {
          icon: "Award",
          title: "Enfoque en Calidad",
          description: "Mejores Prácticas"
        }
      ]
    },
    projects: [
      {
        title: "Nombre del Proyecto",
        description: "Describe tu proyecto aquí. Qué hace, qué problemas resuelve y qué tecnologías usaste.",
        image: "/malm85/malm85-curso-configuraci-n-entorno-linux-2025.io/project-ecommerce.jpg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/malm85/project",
        demo: "https://project-demo.vercel.app"
      }
      // Agrega más proyectos según sea necesario
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 }
          ]
        },
        {
          title: "Herramientas y Otros",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Miguel Angel Lopez Martinez - Tecnologo en Sistemas",
      description: "Portfolio personal de Miguel Angel Lopez Martinez, un tecnologo en sistemas especializado en tecnologías web modernas.",
      keywords: ["tecnologo en sistemas", "desarrollo web", "portfolio", "react", "typescript"]
    }
  }
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Miguel Angel Lopez Martinez",
    title: "Technical Support",
    subtitle: "Cibersecurity",
    greeting: "Hello, I'm",
    profilePhoto: "/profile-photo.png",
    cvUrl: "/path-to-your-cv.pdf" // Optional - update this path
  },

  contact: {
    email: "miguel.lopezm85@hotmail.com",
    phone: "+573505810218",
    location: "Medellin, Colombia",
    social: {
      github: "https://github.com/malm85",
      linkedin: "https://linkedin.com/in/miguelangelm8510",
      twitter: "https://twitter.com/malm85", // Optional - update if different
      instagram: "https://instagram.com/malm85" // Optional - update if different
    }
  },

  about: {
    description: "IT and security professional with 15 years of experience in defense",
    experience: "Technical support Engineer",
    highlights: [
      {
        icon: "Code2",
        title: "5+ Years",
        description: "Professional Experience"
      },
      {
        icon: "Users",
        title: "20+ Projects",
        description: "Successfully Delivered"
      },
      {
        icon: "Lightbulb",
        title: "Modern Tech",
        description: "Latest Technologies"
      },
      {
        icon: "Award",
        title: "Quality Focus",
        description: "Best Practices"
      }
    ]
  },

  projects: [
    {
      title: "Project Name",
      description: "Describe your project here. What it does, what problems it solves, and what technologies you used.",
      image: "/project-image.jpg",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/malm85/project",
      demo: "https://project-demo.vercel.app"
    }
    // Add more projects as needed
  ],

  skills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "Tailwind CSS", level: 88 },
          { name: "Vue.js", level: 75 }
        ]
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", level: 88 },
          { name: "Python", level: 82 },
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "GraphQL", level: 78 }
        ]
      },
      {
        title: "Tools & Others",
        skills: [
          { name: "AWS", level: 85 },
          { name: "Docker", level: 82 },
          { name: "Git", level: 92 },
          { name: "Jest", level: 88 },
          { name: "Figma", level: 75 }
        ]
      }
    ],
    technologies: [
      "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
      "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
    ]
  },

  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with ❤️ using React & TypeScript"
  },

  meta: {
    title: "Miguel Angel Lopez Martinez - Technical Support",
    description: "Personal portfolio of Miguel Angel Lopez Martinez, a technical support specializing in modern web technologies.",
    keywords: ["technical support", "web development", "portfolio", "react", "typescript"]
  }
};

// Export the content for use in components
export { content };
