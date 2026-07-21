import { Box, Typography } from "@mui/material";
import ExperienceItem from "./ExperienceItem";

const experienceData = [
    {
    title: "Senior Software Engineer",
    period: "December 2025 - Present",
    company: "Idealab Software Services Limited",
    location: "Lagos, Nigeria",
    experiences: [
      "Developed and maintained a multi-tenant insurance management platform using React, TypeScript, and TanStack, delivering full-stack features spanning UI development, middleware, business logic, validation, database schema migrations, and data backfills.",
      "Led the modernization of a legacy analytics dashboard, implementing real-time WebSocket updates and data segmentation to enhance monitoring, reporting, and operational decision-making.",
      "Architected and implemented a multi-branch tenant model, enabling organizations to manage multiple operational branches while preserving tenant isolation and business workflows.",
      "Built an internal operations application for tenant administration, customer support, and issue investigation, streamlining management of broker organizations and user accounts.",
      "Worked cross-functionally with product, engineering, and support teams to deliver management-prioritized features while providing technical guidance and task decomposition for junior engineers and interns.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    period: "April 2024 - December 2025",
    company: "Independent Contractor",
    location: "Remote",
    experiences: [
      "Developed full-stack web applications using Tanstack, React.js, Next.js, TypeScript, and NestJS, implementing responsive designs with Shadcn UI and TailwindCSS",
      "Migrated legacy systems to modern tech stack (React.js, Node.js, TypeScript) ensuring zero downtime and improved performance by 50%",
      "Built and deployed responsive web applications for startups using React.js and Node.js, contributing to 60% increase in site traffic and 25% rise in customer retention",
      "Designed and implemented RESTful APIs using Express.js and NestJS, improving API response times by 30% and reducing system downtime by 15%",
      "Optimized frontend and backend code using TypeScript and modern JavaScript practices, reducing page load times by 50% and enhancing database query performance by 35%",
      "Implemented comprehensive testing frameworks for React.js and Node.js applications, increasing code coverage by 50% and reducing production bugs by 35%",
      "Designed and implemented secure authentication systems using AuthJS, Passport.js, JWT, and OAuth, ensuring full compliance with industry security standards and reducing vulnerabilities by 50%",
    ],
  },
  {
    title: "DevOps / SRE Engineer",
    period: "March 2023 - April 2024",
    company: "Interswitch Group",
    location: "Lagos, Nigeria",
    experiences: [
      "Managed and maintained critical infrastructure systems using AWS services, Docker, and Kubernetes, ensuring 99.80% uptime for production services",
      "Developed automated monitoring and alerting systems using Python and Bash scripting, reducing Mean Time To Recovery (MTTR) by 10%",
      "Collaborated with senior engineers to identify and resolve complex performance bottlenecks, implementing solutions that improved system reliability",
      "Participated in 24/7 on-call rotations, providing rapid response to site reliability issues and maintaining service level agreements",
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
