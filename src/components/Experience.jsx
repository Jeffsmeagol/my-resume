import { Box, Typography } from "@mui/material";
import ExperienceItem from "./ExperienceItem";

const experienceData = [
  {
    title: "Freelance Full-Stack Developer",
    period: "April 2024 - Present",
    company: "Independent Contractor",
    location: "Remote",
    experiences: [
      "Developed full-stack web applications using React.js, Next.js, TypeScript, and NestJS, implementing responsive designs with Material UI and TailwindCSS",
      "Migrated legacy systems to modern tech stack (React.js, Node.js, TypeScript) ensuring zero downtime and improved performance by 50%",
      "Built and deployed responsive web applications for startups using React.js and Node.js, contributing to 60% increase in site traffic and 25% rise in customer retention",
      "Designed and implemented RESTful APIs using Express.js and NestJS, improving API response times by 30% and reducing system downtime by 15%",
      "Optimized frontend and backend code using TypeScript and modern JavaScript practices, reducing page load times by 50% and enhancing database query performance by 35%",
      "Implemented comprehensive testing frameworks for React.js and Node.js applications, increasing code coverage by 50% and reducing production bugs by 35%",
      "Designed and implemented secure authentication systems using AuthJS, Passport.js, JWT, and OAuth, ensuring full compliance with industry security standards and reducing vulnerabilities by 50%",
    ],
  },
  {
    title: "Full-Stack Engineer",
    period: "April 2024 - July 2024",
    company: "TV Deluxe Global",
    location: "Lagos, Nigeria",
    experiences: [
      "Led full-stack development initiatives using React.js, Next.js, and NestJS, contributing to the entire software development lifecycle from requirements analysis to deployment",
      "Architected and implemented multi-country payment service integration using TypeScript and RESTful APIs, supporting multiple third-party payment providers",
      "Designed and developed product delivery services for global inventory management using Node.js, Express.js, and MongoDB",
      "Implemented comprehensive CI/CD pipelines for client, admin, and backend applications using Docker and Kubernetes",
      "Built SMS and email notification services using Node.js and third-party APIs, enhancing user communication capabilities",
      "Collaborated with product and design teams to conceptualize and implement scalable system architecture",
    ],
  },
  {
    title: "DevOps / SRE Engineer",
    period: "March 2023 - January 2024",
    company: "Interswitch Group",
    location: "Lagos, Nigeria",
    experiences: [
      "Managed and maintained critical infrastructure systems using AWS services, Docker, and Kubernetes, ensuring 99.80% uptime for production services",
      "Developed automated monitoring and alerting systems using Python and Bash scripting, reducing Mean Time To Recovery (MTTR) by 10%",
      "Collaborated with senior engineers to identify and resolve complex performance bottlenecks, implementing solutions that improved system reliability",
      "Participated in 24/7 on-call rotations, providing rapid response to site reliability issues and maintaining service level agreements",
      "Designed and implemented user-friendly web interfaces using React.js and Material UI, resulting in 25% increase in user engagement and 20% decrease in bounce rate",
    ],
  },
  {
    title: "Frontend Engineer",
    period: "January 2021 - November 2022",
    company: "FireSwitch Technologies Ltd",
    location: "Ibadan, Nigeria",
    experiences: [
      "Developed responsive web applications using React.js, TypeScript, and Material UI, translating UI/UX designs into high-quality, accessible code that improved user engagement by 25%",
      "Optimized web applications for maximum performance and scalability, implementing code splitting and lazy loading techniques that reduced page load time by 40% and increased site traffic by 20%",
      "Built and maintained RESTful APIs using Node.js and Express.js, enabling seamless integration with third-party services and improving system efficiency by 30%",
      "Implemented comprehensive error handling and debugging protocols, reducing production bugs by 35% and improving overall code quality by 20%",
      "Designed and developed responsive, accessible web pages ensuring cross-browser compatibility and mobile-first design principles for optimal user experience",
    ],
  },
];

export default function Experience() {
  return (
    <Box>
      <Typography
        fontSize="1.4rem"
        fontWeight={600}
        borderBottom={2}
        pt={4}
        pb={1}
      >
        PROFESSIONAL EXPERIENCE
      </Typography>

      {experienceData.map((job, index) => (
        <ExperienceItem
          key={index}
          title={job.title}
          period={job.period}
          company={job.company}
          location={job.location}
          experiences={job.experiences}
        />
      ))}
    </Box>
  );
}
