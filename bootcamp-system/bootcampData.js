// Sample Bootcamp Data Structure

export const bootcampData = {
  id: "bootcamp-001",
  title: "Web Development Bootcamp",
  description: "15-day intensive web development bootcamp",
  totalDays: 15,
  currentDay: 1,
  startDate: new Date("2026-02-10"),
  endDate: new Date("2026-02-24"),
  days: [
    {
      dayNumber: 1,
      title: "Introduction to HTML",
      description: "Learn the basics of HTML and web structure",
      isUnlocked: true,
      completedNotes: 0,
      totalNotes: 10,
      notes: [
        {
          id: "day1-note1",
          title: "What is HTML?",
          content: "HTML stands for HyperText Markup Language...",
          type: "text",
          duration: 15,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day1-note2",
          title: "HTML Document Structure",
          content: "Every HTML document has a basic structure...",
          type: "video",
          duration: 20,
          fileUrl: "/videos/html-structure.mp4",
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day1-note3",
          title: "HTML Tags and Elements",
          content: "HTML uses tags to define elements...",
          type: "text",
          duration: 10,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day1-note4",
          title: "Headings and Paragraphs",
          content: "Learn about h1-h6 and p tags...",
          type: "code",
          duration: 15,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day1-note5",
          title: "Links and Images",
          content: "How to add links and images in HTML...",
          type: "video",
          duration: 25,
          fileUrl: "/videos/links-images.mp4",
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day1-note6",
          title: "Lists in HTML",
          content: "Ordered and unordered lists...",
          type: "text",
          duration: 10,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day1-note7",
          title: "HTML Forms Basics",
          content: "Introduction to HTML forms...",
          type: "code",
          duration: 20,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day1-note8",
          title: "Semantic HTML",
          content: "Using semantic tags for better structure...",
          type: "text",
          duration: 15,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day1-note9",
          title: "HTML Best Practices",
          content: "Tips for writing clean HTML...",
          type: "pdf",
          duration: 10,
          fileUrl: "/pdfs/html-best-practices.pdf",
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day1-note10",
          title: "Day 1 Quiz",
          content: "Test your HTML knowledge...",
          type: "quiz",
          duration: 15,
          isCompleted: false,
          createdAt: new Date()
        }
      ]
    },
    {
      dayNumber: 2,
      title: "CSS Fundamentals",
      description: "Master CSS styling and layouts",
      isUnlocked: false,
      completedNotes: 0,
      totalNotes: 10,
      notes: [
        {
          id: "day2-note1",
          title: "Introduction to CSS",
          content: "What is CSS and why we need it...",
          type: "text",
          duration: 15,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day2-note2",
          title: "CSS Selectors",
          content: "Different types of CSS selectors...",
          type: "video",
          duration: 20,
          fileUrl: "/videos/css-selectors.mp4",
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day2-note3",
          title: "Colors and Backgrounds",
          content: "Working with colors in CSS...",
          type: "code",
          duration: 15,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day2-note4",
          title: "Box Model",
          content: "Understanding the CSS box model...",
          type: "text",
          duration: 20,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day2-note5",
          title: "Flexbox Layout",
          content: "Modern layouts with Flexbox...",
          type: "video",
          duration: 30,
          fileUrl: "/videos/flexbox.mp4",
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day2-note6",
          title: "CSS Grid",
          content: "Creating grid layouts...",
          type: "code",
          duration: 25,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day2-note7",
          title: "Responsive Design",
          content: "Media queries and responsive techniques...",
          type: "text",
          duration: 20,
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day2-note8",
          title: "CSS Animations",
          content: "Adding animations with CSS...",
          type: "video",
          duration: 25,
          fileUrl: "/videos/css-animations.mp4",
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day2-note9",
          title: "CSS Best Practices",
          content: "Writing maintainable CSS...",
          type: "pdf",
          duration: 10,
          fileUrl: "/pdfs/css-best-practices.pdf",
          isCompleted: false,
          createdAt: new Date()
        },
        {
          id: "day2-note10",
          title: "Day 2 Quiz",
          content: "Test your CSS knowledge...",
          type: "quiz",
          duration: 15,
          isCompleted: false,
          createdAt: new Date()
        }
      ]
    }
    // Days 3-15 would follow the same structure
  ]
};

// Helper function to generate all 15 days
export const generateBootcampDays = () => {
  const topics = [
    "Introduction to HTML",
    "CSS Fundamentals",
    "JavaScript Basics",
    "DOM Manipulation",
    "ES6+ Features",
    "Async JavaScript",
    "React Basics",
    "React Hooks",
    "State Management",
    "API Integration",
    "Node.js Basics",
    "Express.js",
    "Database Basics",
    "Authentication",
    "Final Project"
  ];

  return topics.map((topic, index) => ({
    dayNumber: index + 1,
    title: topic,
    description: `Learn ${topic} in depth`,
    isUnlocked: index === 0,
    completedNotes: 0,
    totalNotes: 10,
    notes: Array.from({ length: 10 }, (_, noteIndex) => ({
      id: `day${index + 1}-note${noteIndex + 1}`,
      title: `${topic} - Lesson ${noteIndex + 1}`,
      content: `Content for ${topic} lesson ${noteIndex + 1}`,
      type: noteIndex === 9 ? 'quiz' : ['text', 'video', 'code', 'pdf'][noteIndex % 4],
      duration: 15 + (noteIndex * 2),
      fileUrl: noteIndex % 2 === 0 ? `/files/day${index + 1}-note${noteIndex + 1}` : undefined,
      isCompleted: false,
      createdAt: new Date()
    }))
  }));
};
