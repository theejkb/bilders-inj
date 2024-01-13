import Image from 'next/image'
import Link from 'next/link'

export default function HomeSection() {
  return (
    <section className={'home-section'}>
      <div className='links'>
        <Link href={'/bildercrew'}>ㅤ</Link>
        <Link href={'/bilderboard'}>ㅤ</Link>
        <Link href={'/bilderdox'}>ㅤ</Link>
        <Link href={'/bilderlabs'}>ㅤ</Link>
        <Link href={'/bilderdising'}>ㅤ</Link>
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
