import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import HeaderSection from '../components/HeaderSection'
import RollerText from '../components/RollerText'
import Form1 from '../components/Form1'
import Form2 from '../components/Form2'
import { Divider } from '@nextui-org/react'

const Bilderlabs: NextPage = () => {
  return (
    <div className={'bildercrew'}>
      <Metadata />
      <Header />
      <main>
        <HeaderSection title={'BilderCrew'} />
        <RollerText></RollerText>
        <div className={'form-container'}>
          <Form1 />
          <Divider className={'separator'} />
          <Form2 />
        </div>
      </main>
    </div>
  )
}

export default Bilderlabs
