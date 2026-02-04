import Header from "@/components/wire-aza/Header";
import Landing from "@/components/wire-aza/Landing";
import Footer from "@/components/wire-aza/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-20">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
