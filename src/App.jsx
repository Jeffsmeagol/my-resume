import {
  Email,
  GitHub,
  Language,
  LinkedIn,
  PermPhoneMsg,
  RadioButtonChecked,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const skills = [
  "JavaScript",
  "Nextjs",
  "Reactjs",
  "React-native",
  "TailwindCSS",
  "Material UI",
  "Shadcn",
  "Tanstack Query",
  "GraphQL",
  "RESTful APIs",
  "HTML",
  "CSS",
  "TypeScript",
  "Nodejs",
  "Expressjs",
  "Nestjs",
  "Prisma",
  "MongoDB",
  "SQL",
  "AWS services",
  "Docker",
  "Kubernetes",
  "Git",
  "Bash",
];

const expFS = [
  "Translated UI/UX designs and wireframes into high-quality code using tools like Reactjs, Material UI with HTML and CSS.",
  "Optimized web applications for maximum speed and scalability, resulting in a 40% decrease in page load time and a 20% increase in overall site traffic.",
  "Developed and maintained RESTful APIs, enabling seamless communication between web applications and third-party services, resulting in a 30% increase in efficiency.",
  "Debugged and troubleshooted web applications, identifying and addressing performance bottlenecks, resulting in a 20% reduction in bug-related delays and a 15% increase in overall code quality.",
  "Built responsive, accessible, and highly-performant web pages to enable all users to navigate site.",
];

const expIS = [
  "Ensured the reliability and performance of ISW infrastructure and related systems.",
  "Developed and maintained monitoring, alerting systems and participated in on-call rotations to address site reliability issues leading the MTTR to reduce by about 10%.",
  "Partnered with senior-level engineers to identify and resolve complex performance issues resulting in 99.80% uptime compared to the 99.50% recorded for the last FY for the kimono's services",
  "Participated in on-call rotations to address site reliability issues.",
  "Collaborated with designers and stakeholders to create a user-friendly interface for a new web application, resulting in a 25% increase in user engagement and a 20% decrease in bounce rate.",
];

const expTV = [
  "Collaborated with the product and design team to conceptualize system architecture",
  "Contributed to the entire development lifecycle, from requirement analysis and planning to design, development, testing, and deployment.",
  "Setup CI/CD pipelines for client, admin, and backend applications",
  "Implemented multi-country payment service by integrating multiple third-party payment providers",
  "Implemented product delivery services for various inventories across the world",
  "Implemented SMS and emailing service for the early version of the Web Application",
];

const expFR = [
  "Assisted in the migration of legacy systems to a modern tech stack, ensuring zero downtime during deployment",
  "Worked effectively within an Agile team, participating in sprint planning, code reviews, and daily stand-ups, contributing to a 15% increase in the team’s speed and timely project deliveries.",
  "Designed and launched a responsive web application for a local startup, contributing to a 60% increase in site traffic and a 25% rise in customer retention",
  "Develop RESTful APIs to integrate third-party services, improving API response times by 30% and reducing system downtime by 15%.",
  "Optimize both front-end and back-end code, reducing page load times by 50% and enhancing database query performance by 35%. This will result in faster response times and an improved user experience.",
  "Developed an automated testing framework for both front-end and back-end systems, increasing code coverage by 50% and reducing production bugs by 35%.",
  "Implemented advanced security protocols, including data encryption and secure authentication systems, reducing security vulnerabilities by 50% and full compliance with industry security standards.",
];

export default function App() {
  return (
    <Box py={4} px={10}>
      <Typography
        textAlign="center"
        fontWeight={600}
        letterSpacing={3}
        fontSize="2rem"
      >
        <span style={{ fontWeight: 900, fontSize: "2.7rem" }}>I</span>FEOLUWA{" "}
        <span style={{ fontWeight: 900, fontSize: "2.7rem" }}>A</span>
        DEBOWALE
      </Typography>

      {/* contacts */}
      <Stack direction="row" justifyContent="center" color="text.secondary">
        <Stack direction="row" mr={2}>
          <Email color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
          <Typography fontSize="0.9rem">adebowalejeﬀ@gmail.com</Typography>
        </Stack>

        <Stack direction="row" mr={2}>
          <PermPhoneMsg color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
          <Typography fontSize="0.9rem">(+234) 8149236128</Typography>
        </Stack>

        <a
          href="https://www.linkedin.com/in/ifeoluwa-adebowale-377779112/"
          style={{ textDecoration: "none" }}
        >
          <Stack direction="row" color="text.secondary" mr={2}>
            <LinkedIn color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
            <Typography fontSize="0.9rem">
              linkedin.com/in/ifeoluwa-adebowale
            </Typography>
          </Stack>
        </a>

        <a
          href="https://github.com/Jeﬀsmeagol"
          style={{ textDecoration: "none" }}
        >
          <Stack direction="row" color="text.secondary" mr={2}>
            <GitHub color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
            <Typography fontSize="0.9rem">github.com/Jeﬀsmeagol</Typography>
          </Stack>
        </a>

        <a
          href="https://adebowalejeﬀ.netlify.app/"
          style={{ textDecoration: "none" }}
        >
          <Stack direction="row" color="text.secondary" mr={2}>
            <Language color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
            <Typography fontSize="0.9rem">adebowalejeﬀ.com</Typography>
          </Stack>
        </a>
      </Stack>

      {/* experiences */}
      <Box>
        <Typography fontSize="1.4rem" fontWeight={600} borderBottom={2} pt={4}>
          PROFESSIONAL EXPERIENCE
        </Typography>

        <Stack direction="row" justifyContent="space-between" pt={4}>
          <Typography fontSize="1.2rem">
            <span style={{ fontWeight: 900 }}>Freelancing</span>
          </Typography>
          <Typography fontSize="1.2rem">Apr 2024 - Jul 2024</Typography>
        </Stack>
        <Typography fontSize="1.2rem">Full-stack Developer</Typography>

        <Box pt={1}>
          {expFR.map((exp) => (
            <Stack direction="row" pb={0.5}>
              <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
              <Typography color="text.secondary">{exp}</Typography>
            </Stack>
          ))}
        </Box>

        <Stack direction="row" justifyContent="space-between" pt={4}>
          <Typography fontSize="1.2rem">
            <span style={{ fontWeight: 900 }}>TV Deluxe Global</span> - Lagos,
            Nigeria
          </Typography>
          <Typography fontSize="1.2rem">Apr 2024 - Jul 2024</Typography>
        </Stack>
        <Typography fontSize="1.2rem">Full-stack Engineer</Typography>

        <Box pt={1}>
          {expTV.map((exp) => (
            <Stack direction="row" pb={0.5}>
              <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
              <Typography color="text.secondary">{exp}</Typography>
            </Stack>
          ))}
        </Box>

        <Stack direction="row" justifyContent="space-between" pt={4}>
          <Typography fontSize="1.2rem">
            <span style={{ fontWeight: 900 }}>Interswitch Group</span> - Lagos,
            Nigeria
          </Typography>
          <Typography fontSize="1.2rem">Mar 2023 - Jan 2024</Typography>
        </Stack>
        <Typography fontSize="1.2rem">DevOps / SRE Engineer</Typography>

        <Box pt={1}>
          {expIS.map((exp) => (
            <Stack direction="row" pb={0.5}>
              <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
              <Typography color="text.secondary">{exp}</Typography>
            </Stack>
          ))}
        </Box>

        <Stack direction="row" justifyContent="space-between" pt={4}>
          <Typography fontSize="1.2rem">
            <span style={{ fontWeight: 900 }}>FireSwitch Technologies Ltd</span>{" "}
            - Ibadan, Nigeria
          </Typography>
          <Typography fontSize="1.2rem">Jan 2021 - Nov 2022</Typography>
        </Stack>
        <Typography fontSize="1.2rem">Front-end Engineer</Typography>

        <Box pt={1}>
          {expFS.map((exp) => (
            <Stack direction="row" pb={0.5}>
              <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
              <Typography color="text.secondary">{exp}</Typography>
            </Stack>
          ))}
        </Box>
      </Box>

      {/* skills */}
      <Box>
        <Typography fontSize="1.4rem" fontWeight={600} borderBottom={2} pt={4}>
          SKILLS
        </Typography>
        <Stack direction="row" minWidth="100%" pt={4} sx={{ flexWrap: "wrap" }}>
          {skills.map((skill) => (
            <Stack direction="row" py={0.5} mr={2}>
              <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
              <Typography color="text.secondary">{skill}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      {/* education */}
      <Box>
        <Typography fontSize="1.4rem" fontWeight={600} borderBottom={2} pt={4}>
          EDUCATION
        </Typography>
        <Stack direction="row" justifyContent="space-between" pt={4}>
          <Typography fontSize="1.2rem">
            <span style={{ fontWeight: 900 }}>Obafemi Awolowo University</span>{" "}
            - Osun, Nigeria
          </Typography>
          <Typography fontSize="1.2rem">2012 - 2019</Typography>
        </Stack>
        <Typography>BSc. Mechanical Engineering </Typography>
      </Box>
    </Box>
  );
}
