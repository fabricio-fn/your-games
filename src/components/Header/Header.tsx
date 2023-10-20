"use client"

import React, { useState } from "react";
import Link from "next/link";
import "./StyleHeader.scss";
import Image from "next/image";
import Loading from "../Skeleton/Loading/Loading";
import { useGameSearch } from "@/api/Hooks/useGameSearch";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const { gameDataQuery, suggestionsQuery } = useGameSearch(searchQuery)

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setSearchQuery(inputValue)
  }

  return (
    <header className="header">
      <div className="search">
        <Link href="/" onClick={() => setSearchQuery("")}>Home</Link>

        <input type="text" placeholder="Search a Game"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      {suggestionsQuery.isLoading ? (
        <Loading />

      ) : suggestionsQuery.isError ? (
        <div>Error when searching for suggestion</div>

      ) : suggestionsQuery.isSuccess && suggestionsQuery.data.length > 0 ? (
        <div className="suggestion">
          {suggestionsQuery.data.map((suggestion) => (
            <Link href={`/${suggestion.name}`} className="suggestionItem"
              key={suggestion.id} onClick={() => setSearchQuery("")}
            >

              <Image src={suggestion.background_image} alt={suggestion.name} width={80} height={100} />

              <div className="content">
                <h3>{suggestion.name}</h3>
                <span>{suggestion.released}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  )
}