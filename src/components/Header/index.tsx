import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Link from "next/link";
import { DivHeaderContainer, PLogo } from "./styles";
import { navItems } from "@/constants";

function Header() {
  return (
    <DivHeaderContainer>
      <AppBar component="nav">
        <Toolbar>
          <PLogo>
            <Link href="/">eSports</Link>
          </PLogo>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link key={item.label} href={`/${item.slug}`}>
                <Button sx={{ color: "#fff" }}>{item.label}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </DivHeaderContainer>
  );
}

export default Header;
