import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "To-Do App",
      description: "A dynamic task management app leveraging React hooks (useState, useEffect) for seamless state management.",
      image: "https://s4.ezgif.com/tmp/ezgif-432a501bce223.png",
      demo: "https://loquacious-banoffee-a490b3.netlify.app/",
      github: "https://github.com/zDaiki/todo-app-react"
    },
    {
      title: "E-commerce Product Catalog",
      description: "An interactive product browsing system with real-time cart updates and responsive UI.",
      image: "https://s4.ezgif.com/tmp/ezgif-4f57d31aa81f5.png",
      demo: "https://stupendous-frangollo-77e509.netlify.app/",
      github: "https://github.com/zDaiki/product-catalog-react"
    },
    {
      title: "React Weather App",
      description: "Integrated an external API to fetch real-time weather data, enhancing user experience with modern UI/UX design.",
      image: "https://s4.ezgif.com/tmp/ezgif-43ff68042fabd.png",
      demo: "https://melodious-chebakia-cfaa4c.netlify.app/",
      github: "https://github.com/zDaiki/weather-app-react"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
