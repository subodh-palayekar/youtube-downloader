import Banner from "@/components/Banner";
import Info from "@/components/Info";
import Search from "@/components/Search";
import Table from "@/components/Table";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen-xl  mx-auto flex-col items-center mb-6">
      <Banner />
      <Search />
      <Info />
      <Table />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
