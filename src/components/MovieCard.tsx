import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }: { movie: any }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/movie/${movie.id}`)}
      sx={{
        width: 250,
        height: 400,
        m: 2,
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
        borderRadius: 3, // Rounded corners for a smoother look
        boxShadow: 3, // Subtle initial shadow
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
          opacity: 0.9, // Slight opacity change on hover for depth effect
        },
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1c1c1c", // Dark background to match theme
        color: "#fff", // White text for contrast
      }}
    >
      {/* Movie Poster */}
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        sx={{
          borderTopLeftRadius: 3, // Round top corners
          borderTopRightRadius: 3, // Round top corners
        }}
      />

      {/* Movie Details */}
      <CardContent sx={{ flexGrow: 1, padding: "10px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          noWrap
          sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          color="gray"
          sx={{
            mt: 1,
            fontSize: "0.875rem", // Slightly smaller text for description
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {movie.overview || "No description available"}
        </Typography>
      </CardContent>
    </Card>
  );
}
