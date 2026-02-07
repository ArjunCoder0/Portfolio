import { FaDiscord, FaGithub, FaMapPin, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Arjun Sagar",
        title: "UI/UX Designer & Web Developer",
        subtitle: "Designer, Developer, Freelancer, Photographer",
        birthday: "25 July 2005",
        age: 19,
        location: "Latur, Maharashtra, India",
        address: "Shivaji Chowk, Latur - 413512",
        phone: "+91 8265032018",
        email: "arjunssagar3@gmail.com",
        website: "www.arjunsagar.com",
        freelance: "Available"
    },
    social: {
        github: "ArjunCoder0",
        linkedin: "arjun-sagar10",
        instagram: "the_arjunsagar",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "PYQ Automation System",
            description: "An automated system for managing and organizing Previous Year Questions (PYQ). Built with HTML, Python, and JavaScript to streamline the process of accessing and managing academic resources for students.",
            image: "/projects/project-1.webp",
            technologies: ["HTML", "Python", "JavaScript", "CSS"],
            github: "https://github.com/ArjunCoder0/PYQ_AUTOMATION_SYSTEM",
            demo: "http://pyq-portal.pages.dev/"
        },
        {
            id: 2,
            title: "Gear Club Events Website",
            description: "A comprehensive event management website for Gear Club. Features event listings, registration system, and admin dashboard. Built with modern JavaScript and responsive design for seamless user experience across all devices.",
            image: "/projects/project-2.webp",
            technologies: ["JavaScript", "HTML", "CSS", "Node.js"],
            github: "https://github.com/ArjunCoder0/gear-club-events",
            demo: "https://gear-club.vercel.app/"
        },
        {
            id: 3,
            title: "GCOEC Classroom",
            description: "Digital classroom management system for Government College of Engineering Chandrapur. Includes features for assignment submission, resource sharing, and student-teacher interaction. Built with HTML and modern web technologies.",
            image: "/projects/project-3.webp",
            technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
            github: "https://github.com/ArjunCoder0/gcoec-classroom",
            demo: "https://gcoec.pages.dev/"
        },
        {
            id: 4,
            title: "ShopSense AI",
            description: "An intelligent shopping assistant powered by AI. Helps users make informed purchasing decisions with product recommendations, price comparisons, and smart shopping features. Built with JavaScript and modern web technologies.",
            image: "/projects/project-4.webp",
            technologies: ["JavaScript", "AI/ML", "HTML", "CSS", "API Integration"],
            github: "https://github.com/ArjunCoder0/ShopSense-AI",
            demo: "https://shopsense-ai-production.up.railway.app/"
        },
        {
            id: 5,
            title: "Super Mario Game",
            description: "A browser-based recreation of the classic Super Mario game. Features smooth animations, collision detection, and engaging gameplay. Built entirely with JavaScript, HTML5 Canvas, and CSS for an authentic gaming experience.",
            image: "/projects/project-5.webp",
            technologies: ["JavaScript", "HTML5 Canvas", "CSS", "Game Development"],
            github: "https://github.com/ArjunCoder0/super-mario-game",
            demo: "https://principle-mario.vercel.app/"
        }
 
    ],
    skills: [
        {
            title: "Frontend Development",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "HTML", level: "Intermediate", hot: true },
                { name: "CSS", level: "Intermediate", hot: true },
                { name: "JavaScript", level: "Intermediate", hot: true },
                { name: "React", level: "Beginner" },
                { name: "Responsive Design", level: "Intermediate" }
            ]
        },
        {
            title: "Backend & Programming",
            icon: <HiDatabase />,
            description: "Server & Programming Languages",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Python", level: "Intermediate", hot: true },
                { name: "Flask", level: "Intermediate", hot: true },
                { name: "Node.js", level: "Beginner" },
                { name: "API Integration", level: "Intermediate" },
                { name: "C/C++", level: "Beginner" },
                { name: "Java", level: "Beginner" }
            ]
        },
        {
            title: "Tools & Technologies",
            icon: <HiCube />,
            description: "Development Tools & Platforms",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Git/GitHub", level: "Intermediate", hot: true },
                { name: "Vercel", level: "Intermediate" },
                { name: "Railway", level: "Intermediate" },
                { name: "Cloudflare Pages", level: "Intermediate" },
                { name: "VS Code", level: "Intermediate" },
                { name: "UI/UX Design", level: "Intermediate" }
            ]
        }
    ],
    experiences: [
        {
            position: "Web Developer & UI/UX Designer",
            company: "Freelance",
            period: "2022 - Present",
            location: "Pune, Maharashtra, India",
            description: "Designing and developing user-friendly websites with responsive and interactive UI. Providing UX enhancements for usability and accessibility while collaborating with clients for tailored web solutions and branding strategies.",
            responsibilities: [
                "Designed and developed user-friendly websites with responsive and interactive UI",
                "Implemented HTML, CSS, JavaScript, PHP, and WordPress",
                "Provided UX enhancements for usability and accessibility",
                "Collaborated with clients for tailored web solutions and branding strategies"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "UI/UX Design"]
        },
        {
            position: "Intern - Software Development",
            company: "IT Solutions Advertisements",
            period: "4 Months",
            location: "Latur, Maharashtra, India",
            description: "Developed marketing programs including logos, brochures, infographics, presentations, and advertisements. Managed multiple projects simultaneously and consulted with clients on graphic design.",
            responsibilities: [
                "Developed marketing programs (logos, brochures, infographics, presentations, advertisements)",
                "Managed up to 5 projects simultaneously",
                "Consulted with clients on graphic design",
                "Created 4+ design presentations monthly"
            ],
            technologies: ["Graphic Design", "Photoshop", "Marketing Design", "Client Consultation"]
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology (B.Tech)",
            field: "Computer Science & Engineering",
            institution: "Government College of Engineering, Chandrapur",
            duration: "2024 - 2027",
            currentYear: "3rd Year",
            description: "Pursuing B.Tech in Computer Science & Engineering with focus on modern computing technologies and software development.",
            focusAreas: ["Data Structures", "Digital Electronics", "Computer Architecture", "Telecommunication Technologies"]
        },
        {
            degree: "Diploma",
            field: "Information Technology",
            institution: "Puranmal Lahoti Government Polytechnic College, Latur",
            duration: "2021 - 2024",
            description: "Completed diploma in Information Technology with comprehensive knowledge of programming and database management.",
            skillsGained: ["C", "C++", "Java", "Database Management"]
        }
    ],
    contactInfo: [
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "arjunssagar3@gmail.com",
            link: "mailto:arjunssagar3@gmail.com"
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@ArjunCoder0",
            link: "https://github.com/ArjunCoder0"
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Arjun Sagar",
            link: "https://www.linkedin.com/in/arjun-sagar10/"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Latur, Maharashtra, India",
            link: null
        }
    ],
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/ArjunCoder0",
            icon: <FaGithub className="w-5 h-5" />
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/arjun-sagar10/",
            icon: <FaLinkedin className="w-5 h-5" />
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/the_arjunsagar/",
            icon: <FaInstagram className="w-5 h-5" />
        }
    ]
}