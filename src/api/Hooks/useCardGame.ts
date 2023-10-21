import { useQuery } from "react-query";
import axios from "axios";

export function useCardGame() {
  const fetchGameData = async () => {
    try {
      const response = await axios.get("https://rawg.io/api/games/lists/main?discover=true&ordering=-relevance&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af")
      return response.data;
    } catch (error) {
      throw new Error("Game data could not be loaded.")
    }
  }

  const { data, isLoading, isError } = useQuery("gameData", fetchGameData)

  return {
    data,
    isLoading,
    isError,
  }
}