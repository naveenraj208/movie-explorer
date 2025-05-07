import { Box, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Toggle Button to Collapse Sidebar */}
      <IconButton
        onClick={() => setCollapsed((prev) => !prev)}
        sx={{
          position: "fixed",
          top: 20,
          left: collapsed ? 10 : 210,
          zIndex: 1300,
          bgcolor: "black",
          color: "white",
          borderRadius: "50%",
          "&:hover": { bgcolor: "grey.800" },
          transition: "all 0.3s ease-in-out",
        }}
      >
        {collapsed ? "☰" : "←"}
      </IconButton>

      {/* Sidebar Container */}
      <Box
        sx={{
          height: "100vh",
          width: collapsed ? 0 : 250,
          position: "fixed",
          top: 0,
          left: 0,
          bgcolor: "black",
          color: "white",
          p: collapsed ? 0 : 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          overflow: "hidden",
          transition: "width 0.3s ease-in-out, padding 0.3s ease-in-out",
          boxShadow: collapsed ? "none" : "3px 0 10px rgba(0,0,0,0.5)",
        }}
      >
        {!collapsed && (
          <>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" fullWidth sx={{ borderRadius: 1 }}>
                Home
              </Button>
            </Link>
            <Link to="/my-list" style={{ textDecoration: "none" }}>
              <Button variant="outlined" fullWidth sx={{ borderRadius: 1 }}>
                My List
              </Button>
            </Link>
          </>
        )}
      </Box>
    </>
  );
}
