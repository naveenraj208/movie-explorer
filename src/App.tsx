import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { MovieProvider } from "./context/MovieListContext";

// Pages
import Home from "../src/components/Home";
import MovieDetails from "../src/components/MovieDetails";
import MyList from "../src/components/MyList";

// Components
import Sidebar from "./components/Sidebar";

// Create a dark theme with a light background for content
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BB86FC", // Purple-ish color for accent
    },
    background: {
      default: "#121212", // Dark background for the app
      paper: "#1f1f1f", // Slightly lighter background for card-like elements
    },
    text: {
      primary: "#ffffff", // White text for contrast on dark background
      secondary: "#e0e0e0", // Light gray for less important text
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Set your preferred font
  },
});

function App() {
  return (
    <MovieProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Apply global CSS reset */}
        <Router>
          <Box sx={{ display: "flex", backgroundColor: "#121212", minHeight: "100vh" }}>
            <Sidebar />
            <Box
              sx={{
                flexGrow: 1,
                ml: 2,
                p: 2,
                backgroundColor: "background.paper", // Ensure the main content has a lighter background
                borderRadius: 2, // Optional rounded corners for content
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/my-list" element={<MyList />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </MovieProvider>
  );
}

export default App;
