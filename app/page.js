import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Search from '@/components/Search'
import Table from '@/components/Table'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-6">
      <Banner/>
      <Search/>
      <Info/>
      <Table/>
    </main>
  )
}
