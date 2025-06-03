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
      "My second project to explore fullstack development isDiscord Clone, a live chat application that mimics the functionality of Discord, allowing users to create servers, channels and participate in text conversations. Currently in development, and only available from the desktop version.",
    image: "/projects/Discord-clone.png",
    link: "https://github.com/vitaliy65/discord-clone",
    liveDemo: "https://discord-clone-dq4f.onrender.com/login",
  },
  {
    title: "Office UA",
    description:
      "My first project on UI design, the main goal was to make the transition to different pages of the site, and to implement the sorting of elements. different pages of the site, and realise the sorting of elements. Also it was necessary to implement a slider on the main page.",
    image: "/projects/Office-UA.jpg",
    link: "https://github.com/vitaliy65/Office-UA",
    liveDemo: "https://office-ua.vercel.app/",
  },
  {
    title: "Better Fitness App",
    description:
      "My first project to learn backend development using Node.js + express using REAST API. The main goal, loading content on the client, remembering the user's choice and sending the information to mail.",
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
