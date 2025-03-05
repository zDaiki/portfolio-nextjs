import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/zDaiki", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bishal-maharjan-376b11300/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/bishal__maharjan/", label: "Instagram" },
  ];

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
