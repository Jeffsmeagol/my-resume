import { Box, Stack, Typography } from "@mui/material";

const frontendSkills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "React Native",
  "HTML5/CSS3",
  "TailwindCSS",
  "Material UI",
  "Shadcn/ui",
  "Redux/Zustand",
  "Tanstack Query",
  "AuthJS",
  "Three.js",
  "GSAP",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "NestJS",
  "RESTful APIs",
  "GraphQL",
  "Microservices",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Prisma ORM",
  "TypeORM",
  "Database Design",
];

const cloudSkills = [
  "AWS Services",
  "Azure",
  "Google Cloud Platform",
  "Docker",
  "Kubernetes",
  "CI/CD Pipelines",
  "Terraform",
];

const aiToolsSkills = [
  "AI Integration",
  "OpenAI API",
  "API Development",
  "Git/GitHub",
  "Bash/Shell",
  "Python",
  "Jest/Testing",
  "Agile/Scrum",
];

export default function Skills() {
  return (
    <Box>
      <Typography
        fontSize="1.4rem"
        fontWeight={600}
        borderBottom={2}
        pt={4}
        pb={1}
      >
        TECHNICAL SKILLS
      </Typography>

      <Stack direction="row" spacing={3} pt={4}>
        <Box flex={1}>
          <Typography fontSize="1.2rem" fontWeight={600} mb={2}>
            Frontend Development
          </Typography>
          <Stack direction="row" sx={{ flexWrap: "wrap" }} gap={1}>
            {frontendSkills.map((skill, index) => (
              <Typography
                key={index}
                color="text.secondary"
                fontSize="0.8rem"
                sx={{
                  backgroundColor: "grey.100",
                  px: 1,
                  py: 0.3,
                  borderRadius: 1,
                  display: "inline-block",
                  mr: 0.5,
                  mb: 0.5,
                }}
              >
                {skill}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Box flex={1}>
          <Typography fontSize="1.2rem" fontWeight={600} mb={2}>
            Backend & Database
          </Typography>
          <Stack direction="row" sx={{ flexWrap: "wrap" }} gap={1}>
            {backendSkills.map((skill, index) => (
              <Typography
                key={index}
                color="text.secondary"
                fontSize="0.8rem"
                sx={{
                  backgroundColor: "grey.100",
                  px: 1,
                  py: 0.3,
                  borderRadius: 1,
                  display: "inline-block",
                  mr: 0.5,
                  mb: 0.5,
                }}
              >
                {skill}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Stack>

      <Stack direction="row" spacing={3} mt={2}>
        <Box flex={1}>
          <Typography fontSize="1.2rem" fontWeight={600} mb={2}>
            Cloud & DevOps
          </Typography>
          <Stack direction="row" sx={{ flexWrap: "wrap" }} gap={1}>
            {cloudSkills.map((skill, index) => (
              <Typography
                key={index}
                color="text.secondary"
                fontSize="0.8rem"
                sx={{
                  backgroundColor: "grey.100",
                  px: 1,
                  py: 0.3,
                  borderRadius: 1,
                  display: "inline-block",
                  mr: 0.5,
                  mb: 0.5,
                }}
              >
                {skill}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Box flex={1}>
          <Typography fontSize="1.2rem" fontWeight={600} mb={2}>
            AI & Tools
          </Typography>
          <Stack direction="row" sx={{ flexWrap: "wrap" }} gap={1}>
            {aiToolsSkills.map((skill, index) => (
              <Typography
                key={index}
                color="text.secondary"
                fontSize="0.8rem"
                sx={{
                  backgroundColor: "grey.100",
                  px: 1,
                  py: 0.3,
                  borderRadius: 1,
                  display: "inline-block",
                  mr: 0.5,
                  mb: 0.5,
                }}
              >
                {skill}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
