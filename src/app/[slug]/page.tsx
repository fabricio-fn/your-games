"use client"

import React from "react";
import Image from "next/image";
import "./GameItemPage.scss"
import { iGame } from "@/components/CardGame/CardGame";
import SkeletonGameItem from "@/components/Skeleton/SkeletonGameItem/SkeletonGameItem";
import { useSelectedGame } from "@/api/Hooks/useSelectedGame";

export default function GameItemPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  const { data, isLoading, isError } = useSelectedGame(slug)

  if (isLoading) {
    return (
      <SkeletonGameItem />
    )
  }

  if (isError || !data) {
    console.error("Error loading game data.")
    return null
  }

  const game: iGame = data

  return (
    <section className="gameItemPage">
      <Image src={game.background_image} alt={game.name} width={1000} height={1000} />

      <div className="container">
        <div className="content">
          <h2>{game.name}</h2>
          <span>Released in {game.released}</span>

          <div className="genres">
            {game.genres.map((genre) => (
              <span key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        <div className="media">
          {game.clip ? (
            <div className="clip">
              <h3>Short clip</h3>
              
              <div className="video">
                <video controls>
                  <source src={game.clip.clips.full} type="video/mp4" />
                </video>
              </div>
            </div>
          ) : (
            null
          )}

          <div className="shortScreenshots">
            <h3>Screenshots</h3>

            <div className="screenshots">
              {game.short_screenshots.map((screenshot) => (
                <Image src={screenshot.image} alt={game.name} width={1000} height={1000} key={screenshot.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}