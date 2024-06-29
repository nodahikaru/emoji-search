'use client'
import useSWR from 'swr'
import AnimeCharacter from "./animeCharacter";
import { useEffect } from 'react';

const fetcher = (arg : any, ...args:any) => fetch(arg, ...args).then((res) => res.json())

export default function AnimeCharacters() {
  
  const { data, error } = useSWR('https://api.nekosapi.com/v3/characters', fetcher);

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div className="flex items-center justify-center flex-wrap py-6">
      { data.items.map((item : any) => (
        <AnimeCharacter {...item} />
      )) }
    </div>
  )
}