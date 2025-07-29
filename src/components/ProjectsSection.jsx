import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Random Quotes Generated App",
    description:
      "A React.js app that displays random inspirational quotes using a React, TailwindCSS and public API.",
    image: "/projects/Quotes App Pic.png",
    tags: ["React", "TailwindCSS", "Public API"],
    demoUrl: "https://github.com/Amresh-Kumar-85/Random-Quotes-Generated-App.git",
    githubUrl: "https://github.com/Amresh-Kumar-85/Random-Quotes-Generated-App.git",
  },
  {
    id: 2,
    title: "Educational Website",
    description:
      "An educational website built to provide interactive learning content for students in a simple and user-friendly format.",
    image: "/projects/Education Website Pic.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://github.com/Amresh-Kumar-85/Educational-Website.git",
    githubUrl: "https://github.com/Amresh-Kumar-85/Educational-Website.git",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "An e-commerce website designed for browsing, purchasing products, and managing orders with a smooth user experience.",
    image: "/projects/E-Commerce Pic.png",
    tags: ["HTML", "CSS", "Tailwind", "JS"],
    demoUrl: "https://github.com/Amresh-Kumar-85/Ecommerce_Website.git",
    githubUrl: "https://github.com/Amresh-Kumar-85/Ecommerce_Website.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Work That  <span className="text-primary"> Stands Out  </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few of my recent projects, thoughtfully built with a strong
          focus on design, performance, and seamless user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Amresh-Kumar-85"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
