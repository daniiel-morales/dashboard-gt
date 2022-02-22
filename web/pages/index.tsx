import type { NextPage } from 'next'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ponte Pilas GT</title>
        <meta name='description' content='Guatemalan Entity Graphs' />
        <link rel='icon' href={`${process.env.BACKEND_URL}/favicon.png`} />
      </Head>
      Ponte Pilas GT
    </div>
  )
}

export default Home
