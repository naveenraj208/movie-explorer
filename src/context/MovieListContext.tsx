import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

// Define types for movie and action
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

interface MovieAction {
  type: "ADD" | "REMOVE";
  payload: Movie | number; // Movie for ADD, id for REMOVE
}

// Create context with a more specific type
interface MovieContextType {
  state: Movie[];
  dispatch: React.Dispatch<MovieAction>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

// Reducer function to handle actions
const reducer = (state: Movie[], action: MovieAction): Movie[] => {
  switch (action.type) {
    case "ADD":
      // Ensure payload is a Movie type when adding
      return [...state, action.payload as Movie];
    case "REMOVE":
      // Filter by movie id when removing
      return state.filter((movie) => movie.id !== (action.payload as number));
    default:
      return state;
  }
};

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [state, dispatch] = useReducer(reducer, [], () => {
    try {
      const localData = localStorage.getItem("my-movies");
      return localData ? JSON.parse(localData) : []; // Fallback to empty array if no data
    } catch (error) {
      console.error("Error parsing movie data from localStorage:", error);
      return []; // Return empty array if there's an issue with localStorage
    }
  });

  // Store state in localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("my-movies", JSON.stringify(state));
    } catch (error) {
      console.error("Error saving movie data to localStorage:", error);
    }
  }, [state]);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook to use movie list context
export const useMovieList = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieList must be used within a MovieProvider");
  }
  return context;
};
