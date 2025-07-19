import { RadioButtonChecked } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export default function ExperienceItem({
  title,
  period,
  company,
  location,
  experiences,
}) {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" pt={4}>
        <Typography fontSize="1.2rem" fontWeight={600}>
          {title}
        </Typography>
        <Typography fontSize="1.2rem">{period}</Typography>
      </Stack>
      <Typography fontSize="1.1rem" color="text.secondary" mb={2}>
        {company} | {location}
      </Typography>

      <Box pt={1}>
        {experiences.map((exp, index) => (
          <Stack direction="row" pb={0.5} key={index}>
            <RadioButtonChecked
              sx={{ fontSize: 15, mt: 0.6, mx: 2, flexShrink: 0 }}
            />
            <Typography color="text.secondary" lineHeight={1.5}>
              {exp}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
