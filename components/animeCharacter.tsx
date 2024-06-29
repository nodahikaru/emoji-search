export default function AnimeCharacter({...args}: AnimeCharacter) {
  return (
    <a className="max-w-sm h-80 mx-4 my-4 rounded overflow-hidden shadow-lg flex flex-col justify-between cursor-pointer">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{args.name}</div>
        <p className="text-gray-700 text-base">
          {args.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{args.nationality}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{args.gender}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{args.species}</span>
      </div>
    </a>
  )
}

export interface AnimeCharacter {
  id: number,
  id_v2: string,
  name: string,
  aliases: string[],
  description: string,
  ages: number[],
  height?: number,
  weight?: number,
  gender: string,
  species: string,
  birthday: string,
  nationality: string,
  occupations: string[]
}