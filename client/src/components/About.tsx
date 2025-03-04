import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                <p className="text-muted-foreground">
                  I'm a passionate full-stack developer with a strong focus on creating
                  user-friendly and scalable web applications. With years of experience
                  in both frontend and backend development, I bring ideas to life through code.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <p className="text-muted-foreground">
                  I specialize in building modern web applications using React,
                  Node.js, and other cutting-edge technologies. I'm passionate about
                  clean code, performance optimization, and creating exceptional user experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
