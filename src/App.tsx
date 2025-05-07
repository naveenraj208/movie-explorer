import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { MovieProvider } from "./context/MovieListContext";


import Home from "../src/components/Home";
import MovieDetails from "../src/components/MovieDetails";
import MyList from "../src/components/MyList";


import Sidebar from "./components/Sidebar";
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BB86FC", 
    },
    background: {
      default: "#121212", 
      paper: "#1f1f1f", 
    },
    text: {
      primary: "#ffffff",
      secondary: "#e0e0e0",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", 
  },
});

function App() {
  return (
    <MovieProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Router>
          <Box sx={{ display: "flex", backgroundColor: "#121212", minHeight: "100vh" }}>
            <Sidebar />
            <Box
              sx={{
                flexGrow: 1,
                ml: 2,
                p: 2,
                backgroundColor: "background.paper", 
                borderRadius: 2, 
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
