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
    <Stack py={6}>
      <Stack textAlign="center" alignItems="center" pb={2}>
        <Typography
          bgcolor="white"
          width="70%"
          fontSize="4rem"
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
          py={6}
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
            I'm an enthusiastic computer programmer that specializes in web
            development, I have the ability to learn and collaborate in rapidly
            changing environments and compositions. Eager to tackle web
            development/design challenges to achieve lasting impact on user
            experience.
          </Typography>

          <Typography fontSize="1.5rem" fontWeight={500} pt={6} pb={1}>
            WORK EXPERIENCE
          </Typography>
          <Typography fontSize="1.2rem" pb={1}>
            Web Developer
          </Typography>
          <Typography>FireSwitch Technologies Ltd</Typography>
          <Typography py={4}>2021 - 2022 / Ibadan, Nigeria</Typography>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Translated designs and wireframes into high-quality code using
              Reactjs with HTML and CSS.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Work with back-end developers to integrate UI components with APIs
              and databases.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Collaborated with designers and performance team on designing
              updates to sites and blogs, improving user experience.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Write high-quality, scalable, and reusable code.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Participated in stand-ups 2 times a month. Team member would
              review, assign, and teach each other.
            </Typography>
          </Stack>

          <Typography fontSize="1.5rem" fontWeight={500} pt={6} pb={1}>
            PROJECTS
          </Typography>
          <Typography fontSize="1.2rem" pb={1}>
            A Travel Agency Website
          </Typography>
          <Typography py={4}>Developer</Typography>

          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Translated designs and wireframes into high-quality code using
              Reactjs, MUI5, with HTML and CSS.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Built responsive, accessible, and dynamic web pages to enable all
              users to navigate site.
            </Typography>
          </Stack>
          <Stack direction="row" pb={0.5}>
            <RadioButtonChecked sx={{ fontSize: 15, mt: 0.6, mx: 2 }} />
            <Typography color="text.secondary">
              Implemented the React-Router DOM for the CSR.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
