import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import HeaderSection from '../components/HeaderSection'
import FormBuilderDox from '../components/FormBuilderDox'

const Bilderlabs: NextPage = () => {
  return (
    <div className={'bildercrew'}>
      <Metadata />
      <Header />
      <main>
        <HeaderSection title={'BilderDox'}/>
        <div className={'form-container'}>
          <FormBuilderDox />
        </div>
      </main>
    </div>
  )
}

export default Bilderlabs
