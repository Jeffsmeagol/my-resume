import { Box, Stack, Typography } from "@mui/material";

export default function Education() {
  return (
    <Box>
      <Typography
        fontSize="1.4rem"
        fontWeight={600}
        borderBottom={2}
        pt={4}
        pb={1}
      >
        EDUCATION
      </Typography>
      <Stack direction="row" justifyContent="space-between" pt={4}>
        <Typography fontSize="1.2rem" fontWeight={600}>
          Obafemi Awolowo University
        </Typography>
        <Typography fontSize="1.2rem">2012 - 2019</Typography>
      </Stack>
      <Typography fontSize="1.1rem" color="text.secondary">
        BSc. Mechanical Engineering | Osun, Nigeria
      </Typography>
    </Box>
  );
}
