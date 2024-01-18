import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import HeaderSection from '../components/HeaderSection'

const Bilderlabs: NextPage = () => {
  return (
    <div>
      <Metadata />
      <Header />
      <main>
        <HeaderSection title={'BilderDising'}/>

      </main>
    </div>
  )
}

export default Bilderlabs
