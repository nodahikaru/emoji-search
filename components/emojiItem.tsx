
'use client'
import React, { useMemo } from 'react';
import { useState } from 'react';

interface EmojiProps {
  title?: string,
  symbol: string,
  keywords?: string,
  selected?: (arg0: string) => void
}

const EmojiItem : React.FC<EmojiProps> = ({ symbol, selected } : EmojiProps) => {

  const [ fadeIn, setFadeIn ] = useState(false);
  const fadeCls = useMemo(() => fadeIn ? 'opacity-100' : 'opacity-0', [fadeIn])

  const handleClick = async () => {
    setFadeIn(true);
    await selected!(symbol);
    setTimeout(() => {
      setFadeIn(false);
    }, 900)
  }

  return (
    <div className="relative w-24 h-24 flex items-center justify-center cursor-pointer text-3xl" onClick={handleClick}>
      { symbol }
      <div className={`absolute bg-sky-200 text-sky-800 font-bold rounded-xl text-xs p-1.5 left-2 bottom-0 cursor-pointer transition-opacity duration-300 ${fadeCls}`}>Copied!</div>
    </div>
  )
}

export default EmojiItem;