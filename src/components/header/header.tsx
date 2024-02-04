import { useState } from "react";

import {
  Drawer,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime } from "@mui/material/colors";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pages = ["Home", "Market", "Choose Us", "Join"];

  const theme = createTheme({
    palette: {
      primary: lime,
    },
  });

  return (
    <AppBar
      sx={{
        height: "80px",
        display: "flex",
        justifyContent: "center",
        backgroundImage: "linear-gradient(0deg, #0f051d 30%, #130749 100%)",
      }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h5" flexGrow={1} sx={{ cursor: "pointer" }}>
              <HashLink
                to="./#Home"
                style={{ textDecoration: "none", color: "yellow" }}>
                COIN-ER
              </HashLink>
            </Typography>

            <Box flexGrow={1} textAlign={"center"}>
              {pages.map((item) => (
                <HashLink to={`./#${item.split(" ")[0]}`} key={item}>
                  <Button
                    sx={{
                      color: "white",
                      "&:hover": {
                        transition: ".3s",
                        color: "transparent",
                        backgroundImage:
                          "linear-gradient(25deg,#2600fc,#ff00ea)",
                        backgroundClip: "text",
                      },
                    }}>
                    {item}
                  </Button>
                </HashLink>
              ))}
            </Box>
            <Box flexGrow={1} textAlign={"right"}>
              <Tooltip title="Account settings">
                <IconButton
                  size="small"
                  sx={{ mr: 3 }}
                  onClick={() => setIsDrawerOpen(true)}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                <Box
                  sx={{
                    width: 350,
                    height: "100%",
                    p: 2,
                    bgcolor: "rgb(37, 36, 36)",
                  }}></Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </ThemeProvider>
    </AppBar>
  );
};

export default Header;
