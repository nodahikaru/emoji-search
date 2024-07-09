export interface GitmojiItemType {
  emoji: string;
  entity?: string;
  code?: string;
  description?: string;
  name?: string;
  semver?: string | null
}

export default function GitmojiItem({ emoji, description } : GitmojiItemType) {

  return (
    <div className="flex flex-col items-center p-4 shadow-sm hover:shadow-md cursor-pointer m-2 rounded-md">
      <h1>{emoji}</h1>
      <div className="text-[12px] py-2">{description}</div>
    </div>
  )
}