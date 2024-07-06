'use client'
import { fetcher } from '@/lib/api/api';
import useSWR from 'swr';
import AnimeTag, { AnimeTagType } from './animeTag';

export default function AnimeTags() {

  const { data, error } = useSWR('https://api.nekosapi.com/v3/images/tags', fetcher);

  return (
    <div className="w-full flex flex-wrap p-4">
      { data && data.count > 0 && data.items.map((item : AnimeTagType) => <AnimeTag id={item.id} name={item.name} description={item.description} is_nsfw={item.is_nsfw} />) }
    </div>
  )
}