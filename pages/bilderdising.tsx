import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import styles from '../styles/Home.module.scss'
import HeaderSection from '../components/HeaderSection'

const Bilderlabs: NextPage = () => {
  return (
    <div className={styles.container}>
      <Metadata />
      <Header />
      <main>
        <HeaderSection title={'BilderDising'}/>

      </main>
    </div>
  )
}

export default Bilderlabs
