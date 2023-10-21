"use client"

import SkeletonCardGame from "../Skeleton/SkeletonCardGame/SkeletonCardGame";
import Link from "next/link";
import Image from "next/image";
import "./Cards.scss";
import { useCardGame } from "@/api/Hooks/useCardGame";
import { platformIcons } from "./PlatformIcons";

export interface iGame {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: { slug: string } }[];
  released: string;
  genres: { id: number; name: string }[];
  short_screenshots: { id: number; image: string }[];
  clip: { clips: { full: string } };
}

export default function CardGame() {
  const { data, isLoading, isError } = useCardGame()

  if (isLoading) {
    return (
      <div className="cardList">
        {Array.from({ length: 12 }, (_, index) => (
          <SkeletonCardGame key={index} />
        ))}
      </div>
    );
  }

  if (isError || !data.results || data.results.length === 0) {
    console.error("Error loading game data.")
    return null
  }

  const games = data.results
  
  return (
    <div className="cardList">
      {games.map((game: iGame) => (
        <Link href="/[slug]" as={`/${encodeURIComponent(game.name)}`} key={game.id}>
          <div className="cardItem">
            <Image src={game.background_image} alt={game.name} width={330} height={230} />

            <div className="content">
              <h2>{game.name}</h2>

              <div className="platforms">
                {game.parent_platforms.map((platformInfo, index) => (
                  <span key={index}>
                    {platformIcons[platformInfo.platform.slug]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}