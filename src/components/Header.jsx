import {
  Email,
  GitHub,
  Language,
  LinkedIn,
  PermPhoneMsg,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box>
      <Typography
        textAlign="center"
        fontWeight={600}
        letterSpacing={3}
        fontSize="2.5rem"
      >
        IFEOLUWA ADEBOWALE
      </Typography>

      <Typography
        textAlign="center"
        fontSize="1.2rem"
        color="text.secondary"
        fontWeight={500}
        mb={2}
      >
        Full-Stack Software Engineer | 5+ Years Experience
      </Typography>

      {/* contacts */}
      <Stack
        direction="row"
        justifyContent="center"
        color="text.secondary"
        flexWrap="wrap"
        gap={2}
      >
        <Stack direction="row" alignItems="center">
          <Email color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
          <Typography fontSize="0.9rem">adebowalejeff@gmail.com</Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <PermPhoneMsg color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
          <Typography fontSize="0.9rem">(+234) 8149236128</Typography>
        </Stack>

        <a
          href="https://www.linkedin.com/in/ifeoluwa-adebowale-377779112/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack direction="row" alignItems="center">
            <LinkedIn color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
            <Typography fontSize="0.9rem">
              linkedin.com/in/ifeoluwa-adebowale
            </Typography>
          </Stack>
        </a>

        <a
          href="https://github.com/Jeffsmeagol"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack direction="row" alignItems="center">
            <GitHub color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
            <Typography fontSize="0.9rem">github.com/Jeffsmeagol</Typography>
          </Stack>
        </a>

        <a
          href="https://adebowalejeff.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack direction="row" alignItems="center">
            <Language color="disabled" fontSize="small" sx={{ mr: 0.5 }} />
            <Typography fontSize="0.9rem">adebowalejeff.com</Typography>
          </Stack>
        </a>
      </Stack>
    </Box>
  );
}
