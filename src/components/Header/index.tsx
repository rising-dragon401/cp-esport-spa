import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { DivHeaderContainer, DivMobileHeader, PLogo } from "./styles";
import { navItems } from "@/constants";
import Image from "next/image";

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <DivMobileHeader>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <PLogo>
          <Link href="/">
            <img src="/images/fisher_esports_logo.png" alt="esports_logo" />
          </Link>
        </PLogo>

        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link key={item.label} href={`/${item.slug}`}>
                <Button
                  sx={{
                    color: "#0f1e3b",
                    fontFamily: "'Tektur', cursive;",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </DivMobileHeader>
  );

  return (
    <DivHeaderContainer>
      <AppBar component="nav">
        <Toolbar>
          <PLogo>
            <Link href="/">
              <Image
                src="/images/fisher_esports_logo.png"
                alt="esports_logo"
                width={300}
                height={70}
              />
            </Link>
          </PLogo>

          <Box sx={{ mr: 2, display: { sm: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link key={item.label} href={`/${item.slug}`}>
                <Button
                  sx={{
                    color: "#fff",
                    fontFamily: "'Tektur', cursive;",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    marginRight: "1rem",
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}

            <Image
              className="college-logo"
              src="/images/fisher_college_logo.png"
              alt="esports_logo"
              width={120}
              height={120}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "80%" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </DivHeaderContainer>
  );
}

export default Header;
