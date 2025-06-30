import { image } from "./images";

export const responseToMessage = (message) => {
  const greetings = ["hello", "hy", "hi", "hello"];
  const normalizedMessage = message.toLowerCase();
  if (greetings.some((greeting) => message.toLowerCase().includes(greeting))) {
    return {
      sender: "bot",
      text: "Hey! I'm here to help. What do you need help with?",
    };
  }
  if (
    normalizedMessage.includes("technologies") ||
    normalizedMessage.includes("tech stack")
  ) {
    return {
      sender: "bot",
      text: "I primarily work with React, React Native, JavaScript, TypeScript, Redux, Node.js, and REST APIs. I also have experience with Firebase, GraphQL, and other modern web technologies.",
    };
  }

  if (
    normalizedMessage.includes("custom ui") ||
    normalizedMessage.includes("custom user interface")
  ) {
    return {
      sender: "bot",
      text: "Yes, I can build custom UIs tailored to your project needs. I focus on creating intuitive, clean, and responsive designs that enhance the user experience.",
    };
  }

  if (normalizedMessage.includes("react hooks")) {
    return {
      sender: "bot",
      text: "I have extensive experience with React hooks, including `useState`, `useEffect`, `useReducer`, and custom hooks. They help in building efficient, readable, and reusable components.",
    };
  }

  if (
    normalizedMessage.includes("third-party libraries") ||
    normalizedMessage.includes("integrate libraries")
  ) {
    return {
      sender: "bot",
      text: "Yes, I can integrate third-party libraries like Axios, Redux, Material-UI, React Router, and many others to enhance the functionality and user interface of your project.",
    };
  }

  if (normalizedMessage.includes("api integration")) {
    return {
      sender: "bot",
      text: "Yes, I specialize in integrating REST APIs and GraphQL into React and React Native apps, allowing your project to fetch and send data seamlessly.",
    };
  }

  if (
    normalizedMessage.includes("pwa") ||
    normalizedMessage.includes("progressive web app")
  ) {
    return {
      sender: "bot",
      text: "Yes! I can build Progressive Web Apps (PWAs) that work seamlessly across all devices and platforms, offering an app-like experience with offline capabilities.",
    };
  }

  if (normalizedMessage.includes("firebase")) {
    return {
      sender: "bot",
      text: "I have experience working with Firebase for real-time databases, authentication, and cloud functions, allowing for scalable and dynamic app features.",
    };
  }

  if (normalizedMessage.includes("responsive design")) {
    return {
      sender: "bot",
      text: "Yes, I focus on creating fully responsive designs using CSS frameworks like Bootstrap or custom media queries to ensure your app works on all screen sizes.",
    };
  }

  if (normalizedMessage.includes("testing")) {
    return {
      sender: "bot",
      text: "I use unit testing and integration testing with tools like Jest and React Testing Library to ensure the app functions as expected. For end-to-end testing, I use Cypress or Selenium.",
    };
  }

  if (
    normalizedMessage.includes("android") ||
    normalizedMessage.includes("ios")
  ) {
    return {
      sender: "bot",
      text: "Yes, I specialize in building cross-platform mobile apps using React Native for both Android and iOS, ensuring a seamless user experience on both platforms.",
    };
  }

  if (normalizedMessage.includes("redux")) {
    return {
      sender: "bot",
      text: "I have strong experience in using Redux for state management in React applications. I can help you handle complex state management needs in large-scale apps.",
    };
  }

  if (normalizedMessage.includes("graphql")) {
    return {
      sender: "bot",
      text: "I have experience working with GraphQL for efficient data querying and mutations, reducing over-fetching and making data management more predictable and flexible.",
    };
  }

  if (
    normalizedMessage.includes("authentication") ||
    normalizedMessage.includes("login system")
  ) {
    return {
      sender: "bot",
      text: "I can implement user authentication using JWT tokens, OAuth, or Firebase Authentication to ensure secure access to your React app or mobile app.",
    };
  }

  if (normalizedMessage.includes("push notifications")) {
    return {
      sender: "bot",
      text: "Yes, I can implement push notifications in React Native using libraries like Firebase Cloud Messaging (FCM) to keep your users engaged with timely updates.",
    };
  }

  if (normalizedMessage.includes("hosting")) {
    return {
      sender: "bot",
      text: "While I don't provide hosting services directly, I can help you deploy your React web app to platforms like Netlify, Vercel, or AWS, and guide you through the deployment process.",
    };
  }

  if (normalizedMessage.includes("version control")) {
    return {
      sender: "bot",
      text: "I use Git and GitHub for version control to track changes and collaborate with other developers efficiently.",
    };
  }

  if (
    normalizedMessage.includes("optimize") ||
    normalizedMessage.includes("performance")
  ) {
    return {
      sender: "bot",
      text: "Yes! I can optimize your React app's performance using techniques like lazy loading, code splitting, memoization, and reducing unnecessary re-renders.",
    };
  }

  if (normalizedMessage.includes("typescript")) {
    return {
      sender: "bot",
      text: "Yes, I use TypeScript in my React and React Native projects to ensure type safety and catch errors early during development, improving code quality.",
    };
  }

  if (normalizedMessage.includes("deployment")) {
    return {
      sender: "bot",
      text: "Yes, I can help deploy your web or mobile app to production using services like AWS, Firebase, or App Store/Google Play for React Native apps.",
    };
  }

  if (normalizedMessage.includes("maintenance")) {
    return {
      sender: "bot",
      text: "Yes, I offer ongoing maintenance services after the project is delivered to ensure your app stays up-to-date and bug-free.",
    };
  }

  if (
    normalizedMessage.includes("freelancer") ||
    normalizedMessage.includes("team")
  ) {
    return {
      sender: "bot",
      text: "I primarily work as a freelancer, but I am open to collaborating with teams on larger projects.",
    };
  }

  if (normalizedMessage.includes("debugging")) {
    return {
      sender: "bot",
      text: "I use a combination of console logs, React Developer Tools, and Chrome DevTools to debug issues in React applications. I also rely on Jest for unit testing to catch errors early.",
    };
  }

  if (
    normalizedMessage.includes("ui/ux") ||
    normalizedMessage.includes("design")
  ) {
    return {
      sender: "bot",
      text: "I collaborate with designers to implement user-centric, intuitive designs. I focus on ensuring a smooth user experience and functional UI elements using modern design principles.",
    };
  }

  if (normalizedMessage.includes("react native")) {
    return {
      sender: "bot",
      text: "React Native allows you to build cross-platform mobile apps with a single codebase for both iOS and Android, reducing development time and cost while maintaining a native-like performance and feel.",
    };
  }

  if (normalizedMessage.includes("error handling")) {
    return {
      sender: "bot",
      text: "I handle errors by using try-catch blocks, custom error messages, and logging mechanisms to track issues. I also ensure that the app gracefully handles errors without affecting the user experience.",
    };
  }

  if (normalizedMessage.includes("animations")) {
    return {
      sender: "bot",
      text: "I have experience creating smooth, performant animations in React using libraries like React Spring, Framer Motion, and CSS transitions to enhance user interactions.",
    };
  }

  if (normalizedMessage.includes("forms")) {
    return {
      sender: "bot",
      text: "Yes, I can build complex forms with custom validation, multi-step forms, and integration with APIs to handle user input efficiently.",
    };
  }

  if (normalizedMessage.includes("security")) {
    return {
      sender: "bot",
      text: "I follow best practices for security, such as encrypting sensitive data, using HTTPS, implementing secure authentication methods, and preventing XSS/CSRF vulnerabilities.",
    };
  }

  if (normalizedMessage.includes("component libraries")) {
    return {
      sender: "bot",
      text: "Yes, I use libraries like Material-UI, Ant Design, and Bootstrap to quickly build responsive, well-designed components. I also build custom components if needed.",
    };
  }

  if (
    normalizedMessage.includes("payment") ||
    normalizedMessage.includes("paypal") ||
    normalizedMessage.includes("stripe")
  ) {
    return {
      sender: "bot",
      text: "Yes, I can integrate payment systems like Stripe, PayPal, or Razorpay into your React or React Native app for secure payment processing.",
    };
  }

  if (normalizedMessage.includes("SEO")) {
    return {
      sender: "bot",
      text: "Yes, I ensure that your React app is SEO-friendly by using server-side rendering (SSR) or static site generation (SSG) to make your site indexable by search engines.",
    };
  }

  if (normalizedMessage.includes("mobile performance")) {
    return {
      sender: "bot",
      text: "I optimize mobile performance by reducing bundle size, using lazy loading, optimizing images, and ensuring smooth animations and transitions.",
    };
  }

  if (
    normalizedMessage.includes("i18n") ||
    normalizedMessage.includes("internationalization")
  ) {
    return {
      sender: "bot",
      text: "Yes, I can implement internationalization (i18n) in your React app using libraries like `react-i18next` to support multiple languages and regions.",
    };
  }

  if (normalizedMessage.includes("accessibility")) {
    return {
      sender: "bot",
      text: "I ensure accessibility by following WCAG guidelines, using semantic HTML, ARIA roles, and conducting accessibility audits with tools like Lighthouse.",
    };
  }

  if (
    normalizedMessage.includes("migrate") ||
    normalizedMessage.includes("migrating")
  ) {
    return {
      sender: "bot",
      text: "Yes, I can help migrate your existing web app to React by refactoring your code, restructuring your components, and ensuring the new app performs efficiently.",
    };
  }

  if (normalizedMessage.includes("training")) {
    return {
      sender: "bot",
      text: "Yes, I offer personalized training sessions for React and React Native to help your team learn and implement best practices in their development process.",
    };
  }

  if (normalizedMessage.includes("chat system")) {
    return {
      sender: "bot",
      text: "Yes, I can integrate real-time chat systems like Firebase Chat or third-party solutions like SendBird or Twilio into your app for real-time communication.",
    };
  }

  if (
    normalizedMessage.includes("rates") ||
    normalizedMessage.includes("cost")
  ) {
    return {
      sender: "bot",
      text: "My rates depend on the complexity and scope of the project. Feel free to send me your project details, and I can provide you with a personalized quote.",
    };
  }

  if (normalizedMessage.includes("deadlines")) {
    return {
      sender: "bot",
      text: "I take deadlines seriously and work closely with clients to ensure timely delivery. I break down projects into phases and set achievable milestones.",
    };
  }

  if (
    normalizedMessage.includes("updates") ||
    normalizedMessage.includes("versioning")
  ) {
    return {
      sender: "bot",
      text: "Yes, I handle app updates and versioning using Git and GitHub, ensuring a smooth process for releasing new features and fixing bugs.",
    };
  }

  if (normalizedMessage.includes("google analytics")) {
    return {
      sender: "bot",
      text: "Yes, I can implement Google Analytics or other analytics tools to track user behavior and performance within your app, helping you make data-driven decisions.",
    };
  }

  if (normalizedMessage.includes("cloud services")) {
    return {
      sender: "bot",
      text: "Yes, I have experience working with cloud services like AWS, Firebase, and Azure for hosting, storage, and backend services.",
    };
  }

  if (normalizedMessage.includes("code quality")) {
    return {
      sender: "bot",
      text: "I follow industry best practices, including code reviews, automated testing, linting, and adhering to coding standards to maintain high-quality code.",
    };
  }

  if (normalizedMessage.includes("user experience")) {
    return {
      sender: "bot",
      text: "I focus on smooth animations, fast load times, responsive design, and intuitive navigation to create a seamless user experience in mobile apps.",
    };
  }

  if (normalizedMessage.includes("startups")) {
    return {
      sender: "bot",
      text: "Yes, I specialize in building apps for startups, helping them scale quickly with flexible, high-performance web and mobile solutions.",
    };
  }

  if (normalizedMessage.includes("scalability")) {
    return {
      sender: "bot",
      text: "I build scalable apps by using modular architecture, optimizing performance, and leveraging cloud-based solutions to handle increased user demand.",
    };
  }

  if (normalizedMessage.includes("existing codebase")) {
    return {
      sender: "bot",
      text: "Yes, I can work with existing codebases, refactor code, and integrate new features while maintaining the integrity of the original project.",
    };
  }

  if (normalizedMessage.includes("consultancy")) {
    return {
      sender: "bot",
      text: "Yes, I offer consultancy services for app development. I can guide you through the best practices, frameworks, and tools suited for your specific project.",
    };
  }

  if (normalizedMessage.includes("search feature")) {
    return {
      sender: "bot",
      text: "Yes, I can implement search functionality using tools like Elasticsearch or Algolia, providing fast and relevant search results for your users.",
    };
  }

  if (normalizedMessage.includes("international clients")) {
    return {
      sender: "bot",
      text: "Yes, I work with clients worldwide. I’m familiar with different time zones and can accommodate your needs for seamless collaboration.",
    };
  }

  return {
    sender: "bot",
    text: "Sorry! I don't know how to respond to that message.",
  };
};

export const project = [
  {
    image: image.project7,
    title: "Wanderlust a traveler website",
    subtitle: "Traveler",
    technologies: ["React.js", "Tailwind.css", "Redux toolkit", "Typescript"],
    link: "https://traveler-pearl.vercel.app/",
  },
  // {
  //   image: image.project1,
  //   title: "Online auto shop and spare parts",
  //   subtitle: "Business website",
  //   technologies: ["HTML5", "CSS3", "Javascript"],
  //   link: "https://auto-shop-topaz.vercel.app",
  // },
  {
    image: image.project2,
    title: "Buy furniture online from your home",
    subtitle: "E-Commerce website",
    technologies: ["HTML5", "CSS3", "Javascript"],
    link: "https://e-commerce-furniture-website-kappa.vercel.app",
  },
  {
    image: image.project3,
    title: "Online books shop buy books online",
    subtitle: "Books Shop",
    technologies: ["HTML5", "CSS3", "Javascript"],
    link: "https://bookshop-kohl.vercel.app/",
  },
  {
    image: image.project4,
    title: "Web Developer portfolio website",
    subtitle: "Portfolio website",
    technologies: ["HTML5", "CSS3", "Javascript"],
  },
  {
    image: image.project5,
    title: "Electrician portfolio website",
    subtitle: "Portfolio website",
    technologies: ["HTML5", "CSS3", "Javascript"],
  },
  {
    image: image.project6,
    title: "American model star portfolio website",
    subtitle: "Portfolio website",
    technologies: ["HTML5", "CSS3", "Javascript"],
    link: "https://modelstar-portfolio.vercel.app",
  },
];

export const achievements = [
  {
    image: image.coding,
    title: "Web Development",
    description:
      "For web development, we create stunning, user-friendly websites tailored to your brand and goals. Our expertise in coding, design, and optimization ensures a seamless online presence that captivates and converts visitors.",
    elipse: image.elipse1,
    background: "#fd246c",
  },
  {
    image: image.design,
    title: "Creative Design",
    description:
      "With creative design, we bring your vision to life through captivating visuals and branding. Our artistic prowess transforms ideas into eye-catching graphics, logos, and marketing materials that resonate with your audience and elevate your brand identity.",
    elipse: image.elipse2,
    background: "#48cda0",
  },
  {
    image: image.projects,
    title: "Project Consultancy",
    description:
      "In project consultancy, we serve as your strategic partner, offering expert guidance to navigate complex endeavors. Our tailored solutions and insights ensure seamless project execution, cost-efficiency, and optimal results, empowering your business to thrive.",
    elipse: image.elipse3,
    background: "#177fff",
  },
  {
    image: image.services,
    title: "Exceptional Services",
    description:
      "Our focus on excellence shines through in every project. We meticulously plan, design, and develop solutions that exceed expectations. Trust us for flawlessly executed projects that deliver tangible results and drive success.",
    elipse: image.elipse4,
    background: "#e6bc14",
  },
  {
    image: image.idea,
    title: "Awesome Idea",
    description:
      "With Awesome Idea, we transform your innovative concepts into reality. Our creative team refines, prototypes, and brings your ideas to life, ensuring they're not just great but truly exceptional. Your vision, our expertise, limitless possibilities.",
    elipse: image.elipse5,
    background: "#e614df",
  },
  {
    image: image.development,
    title: "Development Design",
    description:
      "Development Design is our specialty. We seamlessly blend development and design, crafting websites and applications that are not only functional but also visually appealing. Our holistic approach ensures a harmonious and engaging user experience.",
    elipse: image.elipse6,
    background: "#14dfe6",
  },
];

export const appProjects = [
  {
    image: image.doctor,
    title: "Doctor Appointment ",
    subtitle: "Appointment App",
    technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Redux"],
    link: "https://apkpure.com/p/com.doctorappointment",
  },
  {
    image: image.dictionary,
    title: "Eng-Urdu Dictionary",
    subtitle: "Education",
    technologies: ["Tailwind.css", "React Native", "AdMob", "Redux toolkit"],
    link: "https://apkpure.com/p/com.sbnews",
  },
  {
    image: image.music,
    title: "Music Player App",
    subtitle: "Music, Sound player",
    technologies: ["React Native", "Spotify API", "Tailwind.css"],
    link: "https://apkpure.com/p/com.sbnews",
  },
];

export const my_skills = [
  {
    image: image.react_icon,
    title: "React Js",
  },
  {
    image: image.tailwind_icon,
    title: "Tailwind Css",
  },

  {
    image: image.javascript,
    title: "Javascript",
  },
  {
    image: image.typescript,
    title: "Typescript",
  },
  {
    image: image.html,
    title: "HTML5",
  },
  {
    image: image.css,
    title: "CSS3",
  },
  {
    image: image.vscode,
    title: "VSCode",
  },
  {
    image: image.firebase,
    title: "Firebase",
  },
  {
    image: image.material_icon,
    title: "Material UI",
  },
  {
    image: image.reactnative,
    title: "React Native",
  },
  {
    image: image.mongodb,
    title: "MongoDB",
  },
  {
    image: image.nodejs,
    title: "Node.js",
  },
  {
    image: image.express,
    title: "Express.js",
  },
  {
    image: image.redux,
    title: "Redux",
  },
];

export const navLinks = [
  { name: "Home", type: "route", to: "/home", href: "#home" },
  { name: "Services", type: "anchor", href: "#services" },
  { name: "About", type: "anchor", href: "#about" },
  { name: "Portfolio", type: "anchor", href: "#portfolio" },
  { name: "Skills", type: "anchor", href: "#skills" },
  { name: "Testimonial", type: "anchor", href: "#testimonial" },
  { name: "Contact us", type: "anchor", href: "#contact" },
  { name: "Projects", type: "route", to: "/templates" },
];
