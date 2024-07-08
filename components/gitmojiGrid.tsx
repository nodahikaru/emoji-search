import data from '@/data/gitmoji.json';
import EmojiItem from './emojiItem';
import GitmojiItem from './gitmojiItem';

export default function GitmojiGrid() {
  return (
    <div className="flex items-center justify-center flex-wrap py-6">
      { data.gitmojis.map((item, index) => (
        <GitmojiItem emoji={item.emoji} />
      )) }
    </div>
  )
}