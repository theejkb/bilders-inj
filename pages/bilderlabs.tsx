import type { NextPage } from 'next'
import Header from '../components/Header'
import Metadata from '../components/Metadata'
import HeaderSection from '../components/HeaderSection'
import RollerText from '../components/RollerText'
import Form1 from '../components/Form1'
import { Divider } from '@nextui-org/react'
import Form2 from '../components/Form2'

const Bilderlabs: NextPage = () => {
  return (
    <div >
      <Metadata />
      <Header />
      <main>
        <HeaderSection title={'BilderLabs'}/>
        <RollerText></RollerText>
        <h3>
          {
            'Whether you\'re a freelancer or a project founder, our DM are open if you want branding that sets you apart from your competitors'
          }
        </h3>
        <div className={'form-container'}>
          <Form1 />
          <Form2 />
        </div>
      </main>
    </div>
  )
}

export default Bilderlabs
