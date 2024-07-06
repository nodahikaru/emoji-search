import AnimeArtists from "@/components/animeArtists";
import AnimeCharacters from "@/components/AnimeCharacters";
import AnimeTags from "@/components/animeTags";


export default function Anime() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      <AnimeTags />
      <AnimeArtists />
      <AnimeCharacters />
    </main>
  )
}