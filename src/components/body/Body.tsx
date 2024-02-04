import Section1 from "./Section1/Section1";
import "./BodyStyle.css";
import { Box } from "@mui/material";
import { BodyContextProvider } from "./BodyContext";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";

const Body = () => {
  return (
    <BodyContextProvider>
      <Box className="body-container">
        <Section1 />
        <Section2 />
        <Section3 />
      </Box>
    </BodyContextProvider>
  );
};

export default Body;
