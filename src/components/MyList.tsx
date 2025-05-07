import { Typography, Box } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useMovieList } from "../context/MovieListContext";

export default function MyList() {
  const { state } = useMovieList();

  return (
    <Box sx={{ p: 4, backgroundColor: "#121212", minHeight: "100vh" }}>
     
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", color: "white" }}>
        🎞️ My Movie List
      </Typography>

      {state.length === 0 ? (
        <Typography variant="body1" sx={{ color: "gray", textAlign: "center" }}>
          No movies in your list.
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
       
          {state.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>
      )}
    </Box>
  );
}
