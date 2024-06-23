import GitHubCalendar from "react-github-calendar";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-center p-24">
      <GitHubCalendar username="nodahikaru" />
    </main>
  );
}
