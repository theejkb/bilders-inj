import Image from 'next/image'
import { BaseSectionProps } from '../types'

interface TreasureMapSectionProps extends BaseSectionProps {
}

export default function TreasureMapSection({
                                             sectionStyles,
                                           }: TreasureMapSectionProps) {
  return (
    <section className={sectionStyles.treasureMapSection}>
      <div className='title'>
        {/*<h1>Join the <span className='blue'>Bilder</span> World</h1>*/}
      </div>
      <Image
        src='/bg_home.jpg'
        alt='treasure map'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        quality={100}
        priority
      />
    </section>
  )
}
