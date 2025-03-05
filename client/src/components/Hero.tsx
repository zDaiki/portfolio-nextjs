import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import MyImage from "@/assets/daiki.jpg"; // Adjust path as necessary



export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square order-2 md:order-1 mx-auto md:ml-6 md:mt-36"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Frontend Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I create beautiful and functional web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <Button onClick={scrollToProjects} size="lg">
                View My Work
              </Button>
              {/* <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button> */}
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90"
              >
                <a href="/bishal--Resume.pdf" download="bishalResume.pdf">
                  Download Resume
                </a>
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 mt-8"
            >
              <a
                href="https://github.com/zDaiki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/bishal-maharjan-376b11300/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/bishal__maharjan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square"
          >
            <img
              src={MyImage}
              className="rounded-full object-cover ml-9 mt-6 w-4/5 h-4/5 border-4 border-white/30 lg:ml-24"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <ArrowDown className="animate-bounce w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}
