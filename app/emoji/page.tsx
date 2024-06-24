import EmojiGrid from "@/components/emojiGrid";
import EmojiHeader from "@/components/emojiHeader";

export default function Emoji() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      <EmojiHeader />
      <EmojiGrid />
    </main>
  )
}