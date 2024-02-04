import { Box, Paper, Typography } from "@mui/material";

const InfoBox = ({ icon, textHead, textContent }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "hsla(50, 0%, 10%,.8)",
        borderRadius: "30px",
        padding: "20px",
        marginTop: "20px",
        border: "1px solid rgb(70, 70, 70)",
        // height: { xs: "160px", md: "auto" },
      }}>
      <Box
        width={"60px"}
        height={"60px"}
        borderRadius={"10px"}
        mr={4}
        sx={{
          backgroundImage: "linear-gradient(25deg,#2600fc,#ff00ea)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {icon}
      </Box>
      <Box color={"white"} width={"70%"}>
        <Typography mb={2} variant="h5" fontWeight={"bolder"}>
          {textHead}
        </Typography>
        <Typography color={"lightgray"}>{textContent}</Typography>
      </Box>
    </Paper>
  );
};

export default InfoBox;
