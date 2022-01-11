import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/portfolio.ico" />
      </Head>
      
      <Header/>

      <Banner/>
      <div className='h-[1000px]'>
        <p>Hello</p>
      </div>
    </div>
  )
}
