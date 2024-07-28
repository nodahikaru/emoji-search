'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image';
import blogs from '@/data/blogs.json';
import { BlogItemType } from "@/components/blogItem";

export default function BlogDetail() {
  const params = useParams();
  const { slug } = params;

const [ blog, setBlog ] = useState<BlogItemType | undefined>(undefined);

  useEffect(() => {
    const blog = blogs.find((item) => item.id == Number(slug))
    setBlog(blog);
  }, [slug])
  
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      {blog && <div className="w-full max-w-42 flex flex-col">
        <div className="w-full h-42">
          <Image src={blog.imageUrl} fill objectFit="contain" alt={blog.title} className="h-full"/>
        </div>
        </div>}
    </main>
  )
}