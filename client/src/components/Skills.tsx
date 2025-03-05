import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiReact, 
  SiPhp, 
  SiMysql, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5,
  SiGit, 
  SiCss3 
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiPhp, name: "PHP", color: "#777BB4" },
    { icon: SiMysql, name: "SQL", color: "#4479A1" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiHtml5, name: "HTML", color: "#E34F26" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiCss3, name: "CSS", color: "#1572B6" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <skill.icon className="w-12 h-12 mb-4" style={{ color: skill.color }} />
                    <h3 className="text-lg font-medium">{skill.name}</h3>
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
