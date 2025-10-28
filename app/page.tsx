import Header from "@/components/wire-aza/Header";
import Landing from "@/components/wire-aza/Landing";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-20">
        <Landing />
      </div>
    </div>
  );
}
