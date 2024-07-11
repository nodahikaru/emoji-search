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
    </>
  )
}