import GitmojiGrid from "@/components/gitmojiGrid";
import GitmojiHeader from "@/components/gitmojiHeader";

export default function GitMoji() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      <GitmojiHeader />
      <GitmojiGrid />
    </main>
  )
}