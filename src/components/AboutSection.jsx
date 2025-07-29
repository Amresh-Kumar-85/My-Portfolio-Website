import { Workflow, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer | Front-End Specialist | React.js Developer
            </h3>

            <p className="text-muted-foreground">
              I’m a passionate Web Developer with 6 months of hands-on
              experience in building modern, responsive, and user-friendly web
              applications. Specializing in Front-End Development, I create
              dynamic interfaces using React.js, focusing on clean design,
              performance, and usability.
            </p>

            <p className="text-muted-foreground">
              In addition to front-end technologies, I have a working knowledge
              of databases such as SQL and NoSQL (MongoDB). I also have a
              foundational understanding of Node.js and Express.js, enabling me
              to collaborate effectively on full-stack projects and understand
              the entire development cycle
            </p>

            <p className="text-muted-foreground">
              I'm committed to delivering web experiences that are not only
              functional but also engaging and scalable — with a continuous
              drive to learn and grow in the ever-evolving tech world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Amresh Kumar - Resume.pdf" download target="_blank" rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">  Front-End Development </h4>
                  <p className="text-muted-foreground">
                    I design and develop responsive, user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React.js. My focus is on performance, accessibility, and clean UI/UX.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database Integration</h4>
                  <p className="text-muted-foreground">
                  I have hands-on experience with SQL for structured data handling and MongoDB for flexible, NoSQL-based applications. I can connect your front-end to robust data systems effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full-Stack Collaboration</h4>
                  <p className="text-muted-foreground">
                    While I specialize in front-end, I also understand the basics of Node.js and Express.js, allowing me to contribute to backend tasks and collaborate smoothly with full-stack teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
