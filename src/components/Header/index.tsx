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

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <DivMobileHeader>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <PLogo>
          <Link href="/">eSports</Link>
        </PLogo>

        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link key={item.label} href={`/${item.slug}`}>
                <Button sx={{ color: "#538af9" }}>{item.label}</Button>
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
            <Link href="/">eSports</Link>
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
                <Button sx={{ color: "#fff" }}>{item.label}</Button>
              </Link>
            ))}
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
