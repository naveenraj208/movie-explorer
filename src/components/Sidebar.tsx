import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function FloatingHeader() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
          backdropFilter: "blur(10px)", // glass effect
          borderRadius: 3,
          padding: "10px 20px",
          display: "flex",
          gap: 2,
          zIndex: 1300,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ borderRadius: 2 }}>
            Home
          </Button>
        </Link>
        <Link to="/my-list" style={{ textDecoration: "none" }}>
          <Button variant="outlined" sx={{ borderRadius: 2, color: "white", borderColor: "white" }}>
            My List
          </Button>
        </Link>
      </Box>
    </>
  );
}
