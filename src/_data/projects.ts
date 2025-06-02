interface Project {
  title: string;
  description: string;
  image: string;
  link: string; // Optional link to the project
  liveDemo?: string; // Optional live demo link
}

export const projects: Project[] = [
  {
    title: "Discord Clone",
    description:
      "Discord Clone is a real-time chat application that mimics the functionality of Discord, allowing users to create servers, channels, and engage in voice and text communication.",
    image: "/projects/Discord-clone.png",
    link: "https://github.com/vitaliy65/discord-clone",
    liveDemo: "https://discord-clone-dq4f.onrender.com/login",
  },
  {
    title: "Office UA",
    description:
      "Office UA is a marketplace platform designed for Ukrainian businesses, offering a wide range of products and services to support local commerce.",
    image: "/projects/Office-UA.jpg",
    link: "https://github.com/vitaliy65/Office-UA",
    liveDemo: "https://github.com/vitaliy65",
  },
  {
    title: "Better Fitness App",
    description:
      "Better Fitness App is a comprehensive fitness application that provides users with personalized workout plans, nutrition tracking, and progress monitoring to help them achieve their fitness goals.",
    image: "/projects/Better-Fitness.png",
    link: "https://github.com/vitaliy65/better-fitness",
    liveDemo: "https://better-fitness.vercel.app/",
  },
  {
    title: "Portfolio (Old Version)",
    description:
      "This is the old version of my portfolio, showcasing my previous projects and skills before the current design and structure.",
    image: "/projects/old-portfolio.png",
    link: "https://github.com/vitaliy65/Portfolio",
    liveDemo: "https://portfoliopv.vercel.app/",
  },
];
