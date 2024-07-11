import { toast } from 'react-hot-toast';

export interface GitmojiItemType {
  emoji: string;
  entity?: string;
  code?: string;
  description?: string;
  name?: string;
  semver?: string | null
}

export default function GitmojiItem({ emoji, description, name } : GitmojiItemType) {

  const onClick = () => {
    toast.success('You did it');
  }

  return (
    <div className="flex flex-col items-center p-4 shadow hover:shadow-md cursor-pointer m-2 rounded-md" onClick={onClick}>
      <h1 className="text-[32px]">{emoji}</h1>
      <h1 className="font-bold">:{name}</h1>
      <div className="text-[12px] py-2 max-w-32 text-center overflow-hidden">{description}</div>
    </div>
  )
}