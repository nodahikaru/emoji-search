'use client'
import useSWR from 'swr'
import AnimeCharacter, { AnimeCharacterType } from "./animeCharacter";
import { useEffect, useState } from 'react';

const fetcher = (arg : any, ...args:any) => fetch(arg, ...args).then((res) => res.json())

export default function AnimeCharacters() {
  
  const { data, error } = useSWR('https://api.nekosapi.com/v3/characters', fetcher);
  const [ characters, setCharacters ] = useState<AnimeCharacterType[]>([]);


  useEffect(() => {
    if (data) {
      setCharacters([...data.items]);
    }
  }, [data])


  return (
    <div className="flex items-center justify-center flex-wrap py-6">
      { characters.map((item : any) => (
        <AnimeCharacter {...item} key={item.id_v2} />
      )) }
    </div>
  )
}