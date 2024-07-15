'use client'
import Link from "next/link";
import styled from "styled-components";

const BlueLink = styled.a `
  color: #00009F;
  text-decoration: underline;
`

export default function GitmojiHeader() {
  return (
    <>
      <h1>
        Gitmoji Search <span role="img" aria-label="Unicorn Emoji">🍝</span>
      </h1>
      <p>
        A simple Gitmoji search tool made with <Link href="https://nextjs.org/" passHref legacyBehavior><BlueLink>Next.js</BlueLink></Link>
      </p>
      <p className="max-w-[560px] text-center mt-4">
       <strong>Using emojis</strong> on <strong>commit messages</strong> provides an <strong>easy way</strong> of <strong>identifying the purpose or intention of a commit</strong> with only looking at the emojis used. As there are a lot of different emojis I found the need of creating a guide that can help to use emojis easier.
      </p>
      <p className="mt-8">
        The gitmojis are published on the <Link href="https://www.npmjs.com/package/gitmojis" passHref legacyBehavior><BlueLink className="italic">following package</BlueLink></Link> in order to be used as a dependency
      </p>
    </>
  )
}