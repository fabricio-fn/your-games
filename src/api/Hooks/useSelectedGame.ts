import { useQuery } from "react-query"
import axios from "axios"

const fetchGameData = async (slug: string) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=c542e67aec3a4340908f9de9e86038af&search=${slug}`)
    return response.data.results[0]
  } catch (error) {
    throw new Error("Game data could not be loaded.")
  }
}

export function useSelectedGame(slug: string) {
  return useQuery(["gameData", slug], () => fetchGameData(slug), {
    enabled: !!slug,
  })
}