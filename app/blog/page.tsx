import BlogItem, { BlogItemType } from "@/components/blogItem";

const blogs : BlogItemType[] = [
  {
    id: 0,
    title: "Build Android and iOS apps with SwiftUI",
    description: "In today’s world, having an app for both iOS and Android is a crucial aspect of any successful business strategy. However, creating separate apps for each platform can be both time-consuming and costly. To address these challenges, many companies opt for hybrid or cross-platform app development using popular frameworks such as Flutter, React Native, and Kotlin Multiplatform (KMP).",
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FiBSDqzV3pW9Rxt6SP2KxQ.png"
  },
  {
    id: 1,
    title: "Can You Pass This Apple-Orange Interview At Apple 🍎?",
    description: "Have you ever dreamed of working at Apple? If you have, this brain teaser is for you! This is a fun logic puzzle that anyone who is a Medium reader will have the knowledge to solve 🧠",
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3_NjzkVEbMhPwJTH9BajWw.png"
  },
  {
    id: 2,
    title: "28 JavaScript One-Liners every Senior Developer Needs to Know",
    description: "This one-liner uses array destructuring to swap the values of a and b without needing a temporary variable. It's a neat trick that makes your code cleaner and more concise. The [a, b] = [b, a] syntax swaps their values by destructuring the array on the right-hand side and assigning it to the left-hand side.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*SvL6TGfFaPmEOtw1dzPDFg.jpeg"
  },
  {
    id: 3,
    title: "15 Libraries You Should Know if You Build with React",
    description: "In the world of modern web development, React stands out as a powerful and versatile library for building user interfaces. Developed by Meta (formerly Facebook), React has gained immense popularity among developers and is widely used in various applications.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*1p_bsCg0TjR_H3VC"
  },
  {
    id: 4,
    title: "The 5 most transformative JavaScript features from ES8",
    description: "ES8 was packed with valuable features that transformed the way we write JavaScript. Code became cleaner, easier to write, and upgraded with new capabilities. Let’s check them out and see the ones you missed.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*lHIajzU8WchU9Je5MARYmA.png"
  },
  {
    id: 5,
    title: "Async Await Is The Worst Thing To Happen To Programming",
    description: "It’s so good. It captures exactly how I feel about async and await. If you wait for async code your function now has to be async as well. And if there’s any function relying on that function that code also has to be async and on and on and on. Until you reach the top level.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*fo0H05oTTridLQMn"
  },
  {
    id: 6,
    title: "You don’t actually NEED if statements (ever)",
    description: "Sure they’re a nice and easy way to create control flow, but you can write many billions of lines of conditional JS code without a SINGLE if statement. And there are many situations where a different construct shows what you wanna do way more clearly — something we can’t ignore as long we write code for humans.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NpXGc-5Vhh6Oiu27FXMB5A.png"
  }
]

export default function Blog() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-24">
      <div className="flex items-center justify-center flex-wrap py-6">
        {blogs.map((item, index) => <BlogItem id={item.id} imageUrl={item.imageUrl} title={item.title} description={item.description} />)}
      </div>
    </main>
  )
}