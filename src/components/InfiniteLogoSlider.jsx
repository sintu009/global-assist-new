import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", name: "Flutter" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", name: "GraphQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
  { src: "https://img.icons8.com/color/96/zoom.png", name: "Zoom" },
  { src: "https://cdn.worldvectorlogo.com/logos/jira-1.svg", name: "JIRA" },
  { src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg", name: "Slack" },

  // 🧩 Downloaded ones (from public/assets/logos/)
  { src: "/assets/logos/hubspot.png", name: "HubSpot" },
  { src: "/assets/logos/wix.png", name: "Wix" },
  { src: "/assets/logos/clockify.svg", name: "Clockify" },
  { src: "/assets/logos/gohighlevel.png", name: "GoHighLevel" },
  { src: "/assets/logos/semrush.png", name: "SEMRush" },
  { src: "/assets/logos/ubersuggest.png", name: "Ubersuggest" },
  { src: "/assets/logos/googleads.png", name: "Google Ads" },
  { src: "/assets/logos/meta.png", name: "Meta" },
  { src: "/assets/logos/clarity.png", name: "Clarity" },
];

const InfiniteLogoSlider = () => {
  return (
    <div className="overflow-hidden py-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#0A0D17]">
        We Work On
      </h2>

      {/* Horizontal Infinite Logo Scroll */}
      <div className="relative w-full overflow-hidden mt-8">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] space-y-1"
            >
              <img
                src={logo.src}
                alt={`tech-logo-${index}`}
                className="w-16 h-16 object-contain"
              />
              <p className="text-xs text-gray-600">{logo.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;
