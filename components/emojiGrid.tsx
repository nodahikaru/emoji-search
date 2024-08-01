import data from '@/data/data.json';
import EmojiItem from './emojiItem';

export default function EmojiGrid() {
  return (
    <div className="flex items-center justify-center flex-wrap py-6">
      <div className="md:container md:mx-auto">
      { data.map((item, index) => (
        <EmojiItem 
          key={index} 
          symbol={item.symbol} 
        />
      )) }
      </div>
    </div>
  )
}