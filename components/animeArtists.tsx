'use client'
import { fetcher } from '@/lib/api/api';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import AnimeArtist from './animeArtist';

export default function AnimeArtists() {

  const { data, error } = useSWR('https://api.nekosapi.com/v3/artists', fetcher);
  const [ artists, setArtists ] = useState<any[]>([]); 

  useEffect(() => {
    if (data) {
      setArtists([...data.items]);
    }
  }, [data])

  return (
    <div className="w-full flex">
      {artists.map((item) => <AnimeArtist key={item.id} id={item.id} name={item.name} />)}
    </div>
  )
}