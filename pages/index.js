import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Posts from './posts'

const posts =[{
  slug:"test",
  title:"testTitle"
},{
  slug:"test1",
  title:"testTitle1"
}]
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Connectivate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <Posts posts={posts}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
