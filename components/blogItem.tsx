import Image from 'next/image';
import Link from 'next/link';

export default function BlogItem({ id, title, description, imageUrl } : BlogItemType) {

  return (
    <Link 
      className="shadow hover:shadow-lg scale-100 hover:scale-110 transition-all rounded-md flex overflow-hidden flex-col items-start m-4 w-80 pb-2 cursor-pointer"
      href={`/blog/${id}`}
    >
      <Image src={imageUrl} width="320" height="200" alt={title} className="max-h-40" />
      <h3 className='p-4 font-bold text-lg'>{title}</h3>
      <p className='px-4 text-sm h-24 text-ellipsis overflow-hidden'>{description}</p>
    </Link>
  )
}

export interface BlogItemType {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}