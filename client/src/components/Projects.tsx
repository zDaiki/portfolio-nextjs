import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import todo from "@/assets/todo.png";
import weather from "@/assets/weather.png";
import productImage from "@/assets/product.png";
import bookstore from "@/assets/bookstore.png";
import movie from "@/assets/Movie.png";

export default function Projects() {
  const projects = [
    {
      title: "To-Do App",
      description: "A dynamic task management app leveraging React hooks (useState, useEffect) for seamless state management.",
      image: todo,
      demo: "https://daiki-todo-app.netlify.app/",
      github: "https://github.com/zDaiki/todo-app-react"
    },
    {
      title: "E-commerce Product Catalog",
      description: "An interactive product browsing system with real-time cart updates and responsive UI.",
      image: productImage,
      demo: "https://daiki-product-catalog.netlify.app/",
      github: "https://github.com/zDaiki/product-catalog-react"
    },
    {
      title: "React Weather App",
      description: "Integrated an external API to fetch real-time weather data, enhancing user experience with modern UI/UX design.",
      image: weather,
      demo: "https://daiki-weather-app.netlify.app/",
      github: "https://github.com/zDaiki/weather-app-react"
    },
    {
      title: "Book Recommendation System",
      description: "Integrated an external API to fetch real-time weather data, enhancing user experience with modern UI/UX design.",
      image: bookstore,
      demo: "#",
      github: "https://github.com/zDaiki/Book-recommendation-system"
    },
    {
      title: "Movie Website",
      description: "DaikiMovies is a movie discovery platform built with React and Tailwind CSS, offering a smooth, user-friendly experience. From new releases to top-rated films and hidden gems, find everything in one place!",
      image: movie,
      demo: "https://daikimovies.netlify.app/",
      github: "https://github.com/zDaiki/Movie-website"
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-75"
                    />
                  </div>
                  <CardHeader className=" text-white">
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    <p className="mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild title="View Live Demo">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View Live Demo">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild title="View Code on GitHub">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View Code on GitHub">
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
