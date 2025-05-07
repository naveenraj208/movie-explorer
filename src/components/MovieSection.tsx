import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

interface MovieSectionProps {
  title: string;
  movies: Array<any>;
}

export default function MovieSection({ title, movies }: MovieSectionProps) {
  return (
    <Box sx={{ p: 4, backgroundColor: "#1c1c1c", borderRadius: 3, boxShadow: 6, mb: 6 }}>
      {/* Section Title */}
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "white" }}>
        {title}
      </Typography>

      {/* Movie Cards */}
      <Box sx={{ display: "flex", gap: 3, overflowX: "auto", scrollBehavior: "smooth" }}>
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
}
