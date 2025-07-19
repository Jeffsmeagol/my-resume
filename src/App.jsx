import { Box } from "@mui/material";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  return (
    <Box py={4} px={10}>
      <Header />
      <Experience />
      <Skills />
      <Education />
    </Box>
  );
}
