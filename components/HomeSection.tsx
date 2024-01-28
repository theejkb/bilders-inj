import Image from 'next/image'
import Link from 'next/link'

export default function HomeSection() {

  return (
    <section className={'home-section'}>
      <div className='links'>
        <Image
          src='/home/poto.png'
          alt='link'
          layout='fill'
          objectFit='contain'
          objectPosition='center'
          quality={100}
          priority
        />
        <Link href={'/bildercrew'}>
          <Image
            className={'bildercrew'}
            src='/home/bildercrew.png'
            alt='link'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            quality={100}
          />
        </Link>
        <Link href={'/bilderboard'}>
          <Image
            className='bilderboard'
            src='/home/bilderboard.png'
            alt='link'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            quality={100}
          />
        </Link>
        <Link href={'/bilderdox'}>
          <Image
            className='bilderdox'
            src='/home/bilderdox.png'
            alt='link'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            quality={100}
          />
        </Link>
        <Link href={'/bilderlabs'}>
          <Image
            className='bilderlabs'
            src='/home/bilderlabs.png'
            alt='link'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            quality={100}
          />
        </Link>
        <Link href={'/bilderdising'}>
          <Image
            className='bilderdising'
            src='/home/bilderdising.png'
            alt='link'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            quality={100}
          />
        </Link>
        <Link href={'https://flip.injbilder.xyz'} rel='noreferrer' target={'_blank'}>
          <Image
            className='bilderflip'
            src='/home/bilderflip.png'
            alt='link'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            quality={100}
          />
        </Link>
      </div>
      <Image
        src='/bg_new.jpg'
        alt='treasure map'
        layout='fill'
        objectFit='cover'
        objectPosition='left'
        quality={100}
        priority
      />
    </section>
  )
}
