'use client'
import { Suspense } from "react";
import { useParams } from "next/navigation"
import useSWR from 'swr'
import { fetcher } from "@/lib/api/api";
import Image from "next/image";

export default function AnimeDetail() {
  const params = useParams();
  const { slug } = params;

  const { data } = useSWR(`https://api.nekosapi.com/v3/characters/${slug}/images`, fetcher, { suspense: true });

  return (
    <Suspense fallback={<div>...loading</div>}>
      <main className="flex bg-white min-h-screen flex-col items-center p-24">
      {data && data.count > 0 && data.items.map((item: any) => (
        <Image key={item.id_v2} src={item.image_url} alt="" width="300" height="300" />
      ))}
    </main>
    </Suspense>
  )
}