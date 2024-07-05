'use client'

import { fetcher } from "@/lib/api/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from 'swr';
import * as Icon from 'react-feather';

export default function AnimeArtist({ id, name } : AnimeArtist) {
  
  const { data, error } = useSWR(`https://api.nekosapi.com/v3/artists/${id}/images`, fetcher);
  const [ artist, setArtist ] = useState< any | null>(null);

  useEffect(() => {

    if (data && data.count > 0) {
      let items = data.items;
      items = items.filter((item:any) => item.rating != 'explicit');
      if (items.length > 0) {
        setArtist(items[0]);
      }
    }
  }, [data])

  if (artist) {
    return (
      <div className="flex flex-col items-center px-8 shadow-md">
        <h3>{artist.artist.name}</h3>
        <div className="pt-4 flex">
          <Link href={artist.artist.links[0]}><Icon.Twitter className="w-3" /></Link>
        </div>
      </div>
    )
  }
  return <></>
}

export interface AnimeArtist {
  id : number;
  name : string;
}