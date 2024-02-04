import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { addCommasToNumber } from "../Tools/CommaSeperation";

interface CoineInfo {
  genData?: {
    description: {
      en: "string";
    };
  };
  propData?: {
    state: {
      key: {
        image: "string";
        name: "string";
        current_price: number;
        market_cap: number;
      };
    };
  };
}

const theme = createTheme({
  palette: {
    success: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

const CoinGenInfo: React.FC<CoineInfo> = ({ genData, propData }) => {
  return (
    <Box
      // width={"30%"}
      height={"100%"}
      sx={{
        borderRight: "1px solid gray",
        margin: { xs: "0", md: "120px 0" },
        padding: { xs: "106px 100px", md: "16px 20px" },
        width: { md: "30%" },
      }}>
      <ThemeProvider theme={theme}>
        <div
          style={{
            textAlign: "center",
          }}>
          <img
            src={propData?.state.key.image}
            alt={propData?.state.key.name}
            style={{ width: "40%", height: "40%" }}
          />
        </div>
        <Typography
          variant={"h4"}
          mt={2}
          sx={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}>
          {propData?.state.key.name}
        </Typography>
        <Typography
          variant="h6"
          mt={5}
          sx={{ textAlign: "justify", color: "lightgray" }}>
          {genData?.description.en.split(".")[0]}
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} mt={3} color="white">
          {`Current Price: `}
          <span style={{ fontWeight: "initial" }}>
            $ {addCommasToNumber(propData?.state.key.current_price)}
          </span>
        </Typography>
        <Typography variant="h5" fontWeight={"bolder"} mt={3} color="white">
          {`Market Cap: `}
          <span style={{ fontWeight: "normal" }}>
            $ {addCommasToNumber(propData?.state.key.market_cap)}
          </span>
        </Typography>

        <Button
          variant="contained"
          color={"success"}
          sx={{ mt: "40px", width: "100%" }}>
          Add to your Tracker
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default CoinGenInfo;
