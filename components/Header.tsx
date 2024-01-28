import Image from 'next/image'
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div style={{
        display: 'flex',
        gap: '15px',
        top: '3px',
        position: 'relative'
      }}>
        <a
          href='https://twitter.com/injbilder'
          target='_blank'
          rel='noopener noreferrer'
        >
           <span className={styles.discordLogo}>
            <Image alt={'x logo'} src={'/X_logo_2023.svg'} height={'25px'} width={'25px'}></Image>
          </span>
        </a>
        <a
          href='https://discord.gg/cqxArJ9UD6'
          target='_blank'
          rel='noopener noreferrer'
        >
            <span className={styles.discordLogo}>
            <Image alt={'discord logo'} src={'/discord-icon-svgrepo-com.svg'} height={'25px'} width={'25px'}></Image>
          </span>

        </a>
      </div>
      <div className={styles.madeWith}>
        Made with ❤️ By Injective Bilder Team
        <a
          href='https://injective.com/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.elrondLogo}
        >
          <Image
            src='/injective-inj-logo.svg'
            alt='Injective Logo'
            width={20}
            height={20}
          />
        </a>
      </div>
    </header>
  )
}
