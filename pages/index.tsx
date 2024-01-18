import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import HomeSection from '../components/HomeSection'

const Home: NextPage = () => {
  return (
    <div>
      <Metadata />
      <Header />
      <main>
        <HomeSection />
      </main>
    </div>
  )
}

export default Home
