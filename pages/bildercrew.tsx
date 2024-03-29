import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import HeaderSection from '../components/HeaderSection'
import JoinUs from '../components/JoinUs'

const Bilderlabs: NextPage = () => {
  return (
    <div className={'bildercrew'}>
      <Metadata />
      <Header />
      <main>
        <HeaderSection title={'BilderCrew'} />
        <JoinUs></JoinUs>
      </main>
    </div>
  )
}

export default Bilderlabs
