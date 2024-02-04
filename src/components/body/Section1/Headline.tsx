import { Box, Stack, Typography } from "@mui/material";

const Headline = () => {
  const iconBox = (
    marginR: number,
    margingL: number,
    padding: number,
    imgPath: string,
    imgClass: string
  ) => {
    return (
      <Box
        flexGrow={2}
        mr={marginR}
        ml={margingL}
        pt={padding}
        sx={{ display: { xs: "none", md: "flex" } }}>
        <img className={imgClass} src={imgPath} alt="bitcoin" />
      </Box>
    );
  };

  return (
    <Box>
      <Stack direction="row">
        {iconBox(2, 0, 15, "./icons/bitcoin1.png", "icon bitcoinIcon")}
        <Box>
          <Typography
            mt="120px"
            sx={{
              fontSize: { xs: "60px", md: "80px" },
              fontWeight: "bold",
              color: "transparent",
              backgroundImage: "linear-gradient(25deg,#2600fc,#ff00ea)",
              backgroundClip: "text",
              textAlign: "center",
            }}>
            CRYPTO CURRENCIES
          </Typography>

          <Typography
            sx={{
              fontSize: "50px",
              color: "white",
              textAlign: "center",
            }}>
            TRACK AND TRADE
          </Typography>
        </Box>
        {iconBox(0, 2, 15, "./icons/ethereum2.png", "icon ethereumIcon")}
      </Stack>
    </Box>
  );
};

export default Headline;
