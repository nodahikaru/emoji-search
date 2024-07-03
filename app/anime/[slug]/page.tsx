'use client'
import { useParams } from "next/navigation"
import useSWR from 'swr'
import { fetcher } from "@/lib/api/api";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AnimeDetail() {
  const params = useParams();
  const { slug } = params;

  const { data, error } = useSWR(`https://api.nekosapi.com/v3/characters/${slug}/images`, fetcher);
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setImages([...data.items]);
    }
  }, [data])

  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      {images.map((item: any) => (
        <Image key={item.id_v2} src={item.image_url} alt="" width="300" height="300" />
      ))}
    </main>
  )
}