import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import styles from '../styles/Home.module.scss'
import HeaderSection from '../components/HeaderSection'
import FormBuilderDox from '../components/FormBuilderDox'

const Bilderlabs: NextPage = () => {
  return (
    <div className={styles.container}>
      <Metadata />
      <Header />
      <main>
        <HeaderSection title={'BilderDox'}/>
        <FormBuilderDox></FormBuilderDox>
      </main>
    </div>
  )
}

export default Bilderlabs
