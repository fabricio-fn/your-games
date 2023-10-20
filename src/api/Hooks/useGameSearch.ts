import { useQuery } from "react-query";
import axios from "axios";
import { iGame } from "@/components/CardGame/CardGame";

const fetchGameData = async (titleGame: string) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=3e8064835a9d4615ac52d4c2e1c58810&search=${titleGame}`)
    return response.data.results
  } catch (error) {
    throw new Error("Game data could not be loaded.")
  }
}

const fetchSuggestions = async (titleGame: string): Promise<iGame[]> => {
  if (titleGame) {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?key=3e8064835a9d4615ac52d4c2e1c58810&search=${titleGame}&page_size=5`)
      return response.data.results
    } catch (error) {
      console.error(error)
      return []
    }
  } else {
    return []
  }
}

export function useGameSearch(titleGame: string) {
  const gameDataQuery = useQuery(["gameData", titleGame], () => fetchGameData(titleGame), {
    enabled: !!titleGame,
  })

  const suggestionsQuery = useQuery(["suggestions", titleGame], () => fetchSuggestions(titleGame), {
    enabled: !!titleGame,
  })

  return { gameDataQuery, suggestionsQuery }
}