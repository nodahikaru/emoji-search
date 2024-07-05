import AnimeArtists from "@/components/animeArtists";
import AnimeCharacters from "@/components/AnimeCharacters";


export default function Anime() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      <AnimeArtists />
      <AnimeCharacters />
    </main>
  )
}