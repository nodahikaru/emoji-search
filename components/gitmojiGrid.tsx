'use client'
import data from '@/data/gitmoji.json';
import GitmojiItem from './gitmojiItem';
import { useEffect, useState } from 'react';

export default function GitmojiGrid() {

  const [ gitmoji, setGitmoji ] = useState<any[]>([]);

  useEffect(() => {
    const newData = data.gitmojis.sort((a, b) => {
      if (a.name > b.name) return 1;
      else return -1;
    });
    setGitmoji([...newData]);
  }, [])

  return (
    <div className="flex items-center justify-center flex-wrap py-6">
      { gitmoji.map((item, index) => (
        <GitmojiItem emoji={item.emoji} description={item.description} name={item.name} />
      )) }
    </div>
  )
}