import { Box, Container, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Carousel from "./Carousel";
import Headline from "./Headline";

const Section1 = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff00ea",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        id="Home"
        sx={{
          backgroundImage: "url(./bg/banner2.jpg)",
          height: "auto",
          pb: 5,
        }}>
        <Container>
          <Stack display={"flex"} justifyContent="center" alignItems={"center"}>
            <Headline />
            <Carousel />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section1;
