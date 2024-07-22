import Image from 'next/image';

export default function BlogItem({ id, title, description, imageUrl } : BlogItemType) {
  return (
    <div className="shadow hover:shadow-lg scale-100 hover:scale-110 transition-all rounded-md flex overflow-hidden flex-col items-start m-4 w-80 pb-2 cursor-pointer">
      <Image src={imageUrl} width="320" height="200" alt={title} />
      <h3 className='p-2 font-bold text-lg'>{title}</h3>
      <p className='px-2 text-sm h-24 text-ellipsis overflow-hidden'>{description}</p>
    </div>
  )
}

export interface BlogItemType {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}