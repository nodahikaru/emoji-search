export default function AnimeTag({ id, name, description, is_nsfw } : AnimeTagType) {
  return (
    <div title={description} className={`px-4 rounded-[20px] shadow mx-2 my-2 text-green-800 text-[14px] font-bold ${is_nsfw ? 'bg-red-400' : 'bg-green-200'}`}>
      #{name}
    </div>
  )
}

export interface AnimeTagType {
  id: number;
  id_v2?: string;
  name: string;
  description: string;
  sub?: string;
  is_nsfw: boolean;
}