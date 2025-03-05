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
                I'm a passionate frontend developer with a strong focus on creating user-friendly and visually appealing web applications. With expertise in modern frontend technologies, I bring ideas to life through clean, efficient, and scalable code.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <p className="text-muted-foreground">
                I specialize in building modern, responsive, and user-friendly web applications using React, HTML, CSS, and JavaScript. I'm passionate about clean code, performance optimization, and creating seamless user experiences with intuitive and interactive interfaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
