import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import HomeSection from '../components/HomeSection'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Metadata />
      <Header />
      <main>
        <HomeSection />
      </main>
    </div>
  )
}

export default Home