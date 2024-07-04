'use client'

import { fetcher } from "@/lib/api/api";
import Image from "next/image";
import { useEffect } from "react";
import useSWR from 'swr';

export default function AnimeArtist({ id, name } : AnimeArtist) {
  
  const { data, error } = useSWR(`https://api.nekosapi.com/v3/artists/${id}/images`, fetcher);

  return (
    <div className="flex flex-col items-center">
      {data && data.count > 0 && <Image className="rounded-full" width="128" height="128" src={data.items[0].image_url} alt={data.items[0].artist.name}/>}
    </div>
  )
}

export interface AnimeArtist {
  id : number;
  name : string
}