import { Box, Container, Typography } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorageIcon from "@mui/icons-material/Storage";

import InfoBox from "./InfoBox";

const Section3 = () => {
  return (
    <Box
      id="Choose"
      height={"auto"}
      pb={3}
      mt={10}
      sx={{
        backgroundImage: "url(./bg/Sec3BG.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <Container>
        <Typography
          variant="h3"
          color="white"
          fontWeight="bold"
          pt={5}
          textAlign="center">
          WHY{" "}
          <span
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(25deg,#2600fc,#ff00ea)",
              backgroundClip: "text",
            }}>
            CHOOSE US
          </span>
        </Typography>
        <Box
          mt={5}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            display: "flex",
            alignItems: "center",
          }}>
          <Box sx={{ width: { xs: "70%", md: "33%" } }}>
            <InfoBox
              icon={
                <AccountBalanceWalletOutlinedIcon sx={{ color: "white" }} />
              }
              textHead={`CONNECT YOUR WALLET`}
              textContent={
                "Use Trust Wallet, Metamask or to connect to the app."
              }
            />
            <InfoBox
              icon={<EditNoteIcon sx={{ color: "white" }} />}
              textHead={`SELECT YOUR QUANTITY`}
              textContent={
                "Upload your crypto and set a title, description and price."
              }
            />
            <InfoBox
              icon={<ReceiptLongIcon sx={{ color: "white" }} />}
              textHead={`CONFIRM TRANSACTION`}
              textContent={"Earn by selling your crypto on our marketplace."}
            />
          </Box>
          <Box
            width={"33%"}
            height={"600px"}
            sx={{
              backgroundImage: "url(./bg/Pic1.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              display: { xs: "none", md: "flex" },
            }}></Box>
          <Box
            sx={{
              width: { xs: "70%", md: "33%" },
            }}>
            <InfoBox
              icon={<PhonelinkSetupIcon sx={{ color: "white" }} />}
              textHead={`RECEIVE YOUR OWN NFTS`}
              textContent={
                "Invest all your crypto at one place on one platform."
              }
            />
            <InfoBox
              icon={<ShoppingCartIcon sx={{ color: "white" }} />}
              textHead={`TAKE A MARKET TO SELL`}
              textContent={
                "Discover, collect the right crypto collections to buy or sell."
              }
            />
            <InfoBox
              icon={<StorageIcon sx={{ color: "white" }} />}
              textHead={`DRIVE YOUR COLLECTION`}
              textContent={"We make it easy to Discover, Invest and manage."}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section3;
