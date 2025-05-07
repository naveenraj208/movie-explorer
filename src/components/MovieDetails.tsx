import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import tmdb from "../api/tmdb";
import { useMovieList } from "../context/MovieListContext";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const { state, dispatch } = useMovieList();

  const isInList = state.some((m: any) => m.id === movie?.id);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await tmdb.get(`/movie/${id}`);
      setMovie(res.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <Typography variant="h6" color="white">Loading...</Typography>;

  return (
    <Box sx={{ p: 4, backgroundColor: "#1c1c1c", borderRadius: 3, boxShadow: 6 }}>
      <Box sx={{ display: "flex", gap: 4, flexDirection: { xs: "column", md: "row" } }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{
            height: 400,
            borderRadius: 8,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          className="hover:scale-105" // Tailwind CSS class for hover effect
        />
        <Box sx={{ flex: 1, color: "white" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            {movie.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "gray" }}>
            {movie.overview}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 500, color: "gray", mb: 1 }}>
            ⭐ {movie.vote_average} | 🎬 {movie.release_date}
          </Typography>

          {/* Button to Add/Remove from My List */}
          <Button
            variant="contained"
            color={isInList ? "error" : "primary"}
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              borderRadius: 5,
              transition: "background-color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: isInList ? "#f44336" : "#3f51b5",
              },
            }}
            onClick={() =>
              dispatch({ type: isInList ? "REMOVE" : "ADD", payload: movie })
            }
          >
            {isInList ? "Remove from My List" : "Add to My List"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
