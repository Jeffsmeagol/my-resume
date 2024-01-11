import {
  Email,
  GitHub,
  Language,
  LinkedIn,
  PermPhoneMsg,
  RadioButtonChecked,
} from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function App() {
  return (
    <Stack py={4}>
      <Stack textAlign="center" alignItems="center" pb={2}>
        <Typography
          bgcolor="white"
          width="70%"
          fontSize="3rem"
          border="2px solid blue"
          mb={-4}
          zIndex={2}
        >
          IFEOLUWA ADEBOWALE
        </Typography>
        <Typography
          bgcolor="rgba(170, 170, 170, 0.5)"
          width="100%"
          fontSize="2rem"
          pt={4}
          pb={1}
        >
          Web Engineer
        </Typography>
      </Stack>
      <Stack direction="row">
        <Box width="35%" textAlign="right" borderRight="2px solid blue" px={4}>
          <Typography fontSize="1.5rem" fontWeight={500} pb={1}>
            CONTACT
          </Typography>
          <Box color="text.secondary">
            <Stack direction="row" justifyContent="flex-end" pb={1}>
              <Typography>adebowalejeﬀ@yahoo.com</Typography>
              <Email color="disabled" sx={{ ml: 2 }} />
            </Stack>

            <Stack direction="row" justifyContent="flex-end" pb={1}>
              <Typography>(+234) 8149236128</Typography>
              <PermPhoneMsg color="disabled" sx={{ ml: 2 }} />
            </Stack>

            <a
              href="https://www.linkedin.com/in/ifeoluwa-adebowale-377779112/"
              style={{ textDecoration: "none" }}
            >
              <Stack direction="row" justifyContent="flex-end" pb={1}>
                <Typography color="blue">
                  Ifeoluwa LinkedIn <br />
                  (https://www.linkedin.com/in/ifeoluwa-adebowale-377779112/)
                </Typography>
                <LinkedIn color="disabled" sx={{ ml: 2 }} />
              </Stack>
            </a>

            <a
              href="https://github.com/Jeﬀsmeagol"
              style={{ textDecoration: "inherit" }}
            >
              <Stack direction="row" justifyContent="flex-end" pb={1}>
                <Typography color="blue">
                  Ifeoluwa Github Account <br /> (https://github.com/Jeﬀsmeagol)
                </Typography>
                <GitHub color="disabled" sx={{ ml: 2 }} />
              </Stack>
            </a>

            <a
              href="https://adebowalejeﬀ.netlify.app/"
              style={{ textDecoration: "inherit" }}
            >
              <Stack direction="row" justifyContent="flex-end" pb={1}>
                <Typography color="blue">
                  My Website <br /> (https://adebowalejeﬀ.netlify.app/)
                </Typography>
                <Language color="disabled" sx={{ ml: 2 }} />
              </Stack>
            </a>
          </Box>

          <Typography fontSize="1.5rem" fontWeight={500} pt={6} pb={1}>
            SKILLS
          </Typography>
          <Box color="text.secondary">
            <Typography>JavaScript/Nodejs</Typography>
            <Typography>Redux-Toolkit</Typography>
            <Typography>React</Typography>
            <Typography>HTML/CSS</Typography>
            <Typography>Material UI</Typography>
            <Typography>React-Hook-Form</Typography>
            <Typography>Python</Typography>
            <Typography>Java/Springboot</Typography>
          </Box>

          <Typography fontSize="1.5rem" fontWeight={500} pt={6} pb={1}>
            OTHERS
          </Typography>
          <Box color="text.secondary">
            <Typography>Git/Github</Typography>
            <Typography>CLI/Bash</Typography>
            <Typography>Agile Methodologies</Typography>
            <Typography>Testing(Unit & Integration)</Typography>
          </Box>

          <Typography fontSize="1.5rem" fontWeight={500} pt={6} pb={1}>
            EDUCATION
          </Typography>
          <Box color="text.secondary">
            <Typography>
              Mechanical Engineering <br /> Obafemi Awolowo University <br />{" "}
              Osun, Nigeria
            </Typography>
          </Box>
        </Box>

        <Box width="60%" px={4}>
          <Typography fontSize="1.5rem" fontWeight={500} pb={1}>
            CAREER OBJECTIVE
          </Typography>
          <Typography>
            I'm an enthusiastic Software Engineer that specializes in the Web, I
            have been oppurtuned to work in multiple facelets of the web space
            from development(coding), testing to deployment and automation in
            over 3 years. I have picked-up the use of many tools and abilities
            to learn and collaborate in these rapidly changing environments and
            compositions. Eager to apply my skills to tackle web
            development/design/maintenance challenges to achieve more performant
            and lasting impact on user experience.
          </Typography>

          <Typography fontSize="1.5rem" fontWeight={500} pt={2} pb={1}>
            WORK EXPERIENCE
          </Typography>

          <Typography fontSize="1.2rem" pb={1}>
            Web Developer/SRE Engineer
          </Typography>
          <Typography>Interswitch Group</Typography>
          <Typography py={2}>2023 - / Lagos, Nigeria</Typography>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Ensured the reliability and performance of ISW infrastructure and
              related systems. Developed and maintained monitoring and alerting
              systems. Participated in on-call rotations to address site
              reliability issues.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Partnered with senior-level engineers to identify and resolve
              complex performance issues resulting in 99.98% uptime compared to
              the 99.96% recorded for the last FY for the kimono's services
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Participated in on-call rotations to address site reliability
              issues.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Collaborated with designers and stakeholders to create a
              user-friendly interface for a new web application, resulting in a
              25% increase in user engagement and a 20% decrease in bounce rate.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Participated as the lead Front-end Engineer in a team of 12
              consisting of fellow Front-end, Back-end, QA, DevOps and Product
              manager in the development of a Travel agency/Social media
              platform that provides users with the ability to find and link
              with travel-partners in Java, Python and JavaScript.
            </Typography>
          </Stack>

          <Typography fontSize="1.2rem" py={1}>
            Web Developer
          </Typography>
          <Typography>FireSwitch Technologies Ltd</Typography>
          <Typography py={2}>2021 - 2022 / Ibadan, Nigeria</Typography>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Translated UI/UX designs and wireframes into high-quality code
              using tools like Reactjs Material UI with HTML and CSS.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Optimized web applications for maximum speed and scalability,
              resulting in a 40% decrease in page load time and a 20% increase
              in overall site traffic.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Developed and maintained RESTful APIs, enabling seamless
              communication between web applications and third-party services,
              resulting in a 30% increase in efficiency.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Debugged and troubleshooted web applications, identifying and
              addressing performance bottlenecks, resulting in a 20% reduction
              in bug-related delays and a 15% increase in overall code quality.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Participated in stand-ups 2 times a month. Team members would
              review, assign, and teach each other.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Built responsive, accessible, and dynamic web pages to enable all
              users to navigate site.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
