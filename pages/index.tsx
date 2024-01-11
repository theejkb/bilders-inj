import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import TreasureMapSection from '../components/TreasureMapSection'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Metadata />
      <Header />
      <main>
        <TreasureMapSection
          sectionStyles={styles}
        />
      </main>
    </div>
  )
}

export default Home
