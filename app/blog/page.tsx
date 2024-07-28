import BlogItem from "@/components/blogItem";
import blogs from '@/data/blogs.json';

export default function Blog() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      <div className="flex items-center justify-center flex-wrap py-6">
        {blogs.map((item, index) => <BlogItem id={item.id} imageUrl={item.imageUrl} title={item.title} description={item.description} />)}
      </div>
    </main>
  )
}