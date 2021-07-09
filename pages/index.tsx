import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coach Anna Maria</title>
        <meta name="description" content="Coach Anna Maria - ritbox, pilates e funcional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coach {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5514997001194&text=Ol%C3%A1%2C%20quero%20treinar%20com%20voc%C3%AA!%20Como%20podemos%20fazer%3F%3F"
          >
            Anna Maria
          </a>
        </h1>

        <p className={styles.description}>
          Preciso de pessoas que queiram emagrecer!
        </p>

        <div className={styles.grid}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5514997001194&text=Ol%C3%A1%2C%20quero%20participar%20do%20desafio%2021%20dias%20do%20Ritbox%2C%20como%20podemos%20fazer%3F%3F"
            className={styles.card}
            style={{ maxWidth: '600px' }}
          >
            <h2 style={{ textAlign: 'center', color: '#0070f3' }}>Desafio 21 - Ritbox</h2>
            <p style={{ textAlign: 'center' }}>Está preparado(a) para um desafio de 21 dias de treinamento intenso e com resultado garantido?</p>
            <br/>
            <p style={{ textAlign: 'center' }}><b>Clica aqui e bora treinar no ritmo certo!</b></p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Todos os direitos reservados
      </footer>
    </div>
  )
}
