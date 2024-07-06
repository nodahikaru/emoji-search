import AnimeCharacters from "@/components/AnimeCharacters";
import AnimeTags from "@/components/animeTags";


export default function Anime() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      <AnimeTags />
      <AnimeCharacters />
    </main>
  )
}