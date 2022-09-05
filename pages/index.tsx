import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

const Home: NextPage = ({ exploreData, cardsData }: any) => {
  return (
    <div>
      <Head>
        <title>AirBnb remake by JHerrera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Expore Nearby</h2>

          {/* Pull data from server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              exploreData?.map((item: any, index: number) => (
                <SmallCard key={`exploreData${item.location}${index}`} img={item.img} distance={item.distance} location={item.location} />
              ))
            }
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {
              cardsData?.map((item: any, index: number) => (
                <MediumCard key={`cardDatat${item.title}${index}`} title={item.title} img={item.img} />
              ))
            }
          </div>
        </section>

        <LargeCard 
          img={`https://links.papareact.com/4cj`}
          title={`The Greatestt Outdoors`}
          description={`WishLists curated by Airbnb.`}
          buttonText={`Get Inspired`}
        />
      </main>
      
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps(): Promise<{
  props: {
    exploreData: any;
    cardsData?: any;
  };
}> {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res => res.json()));

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
