export interface GitmojiItemType {
  emoji: string;
  entity?: string;
  code?: string;
  description?: string;
  name?: string;
  semver?: string | null
}

export default function GitmojiItem({ emoji } : GitmojiItemType) {

  return (
    <div className="flex flex-col p-4">
      <h3>{emoji}</h3>
    </div>
  )
}