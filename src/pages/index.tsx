import Head from 'next/head'
import styles from '@/styles/HomeNoAuth.module.scss'
import HeaderNoAuth from '@/components/homeNoAuth/headerNoAuth'
import PresentationSection from '@/components/homeNoAuth/presentationSection'
import CardsSections from '@/components/homeNoAuth/cardsSection'

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property='og:title' content='Onebitflix' key='title' />
        <meta name='description' content='Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!' />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSections />
      </main>
    </>
  )
}

export default HomeNoAuth