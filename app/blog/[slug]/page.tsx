'use client'
import { useParams } from "next/navigation";

export default function BlogDetail() {
  const params = useParams();
  const { slug } = params;
  
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      
    </main>
  )
}