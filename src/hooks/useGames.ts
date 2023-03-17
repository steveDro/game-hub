import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setErrors] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setIsLoading(true);
//     apiClient
//       .get<FetchGameResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setErrors(err.message);
//         setIsLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// };

export default useGames;
