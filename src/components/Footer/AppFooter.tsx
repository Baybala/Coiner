import { Box, Container, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AppFooter = () => {
  return (
    <Box
      id="Join"
      className="app-footer"
      sx={{
        mt: 10,
        backgroundImage: "url(./bg/Pic2.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      width={"100%"}
      height={"300px"}>
      <Container>
        <Box
          color={"white"}
          alignItems={"end"}
          justifyContent={"center"}
          display={"flex"}
          height={"180px"}>
          <TwitterIcon
            sx={{ m: "0 10px", fontSize: "55px", cursor: "pointer" }}
          />
          <FacebookIcon
            sx={{ m: "0 10px", fontSize: "55px", cursor: "pointer" }}
          />
          <YouTubeIcon
            sx={{ m: "0 10px", fontSize: "55px", cursor: "pointer" }}
          />
          <LinkedInIcon
            sx={{ m: "0 10px", fontSize: "55px", cursor: "pointer" }}
          />
        </Box>
        <Box
          mt={5}
          color={"white"}
          alignItems={"end"}
          justifyContent={"center"}
          display={"flex"}>
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              "&:hover": {
                transition: ".3s",
                color: "transparent",
                backgroundImage: "linear-gradient(25deg,#2600fc,#ff00ea)",
                backgroundClip: "text",
              },
            }}>
            Privacy
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ml: "30px",
              cursor: "pointer",
              "&:hover": {
                transition: ".3s",
                color: "transparent",
                backgroundImage: "linear-gradient(25deg,#2600fc,#ff00ea)",
                backgroundClip: "text",
              },
            }}>
            Terms of Use
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AppFooter;
