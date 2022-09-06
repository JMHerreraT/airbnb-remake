import { format } from "date-fns";
import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }: any) => {

  const router = useRouter();

  const { location, date, guests } = router.query;

  const formattedDate = format(new Date(date), "dd MMMM yy");

  searchResults = [
    {
      img: 'https://links.papareact.com/xqj',
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian house",
      description: "1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine",
      star: 4.73,
      price: "S/ 30 / night",
      total: "S/ 117 Total",
      long: -0.0022275,
      lat: 51.5421655,
    },
    {
      img: 'https://links.papareact.com/hz2',
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian house",
      description: "1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine",
      star: 4.32,
      price: "S/ 30 / night",
      total: "S/ 117 Total",
      long: -0.095091,
      lat: 51.48695,
    },
    {
      img: 'https://links.papareact.com/uz7',
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian house",
      description: "1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine",
      star: 3.4,
      price: "S/ 30 / night",
      total: "S/ 117 Total",
      long: -0.135638,
      lat: 51.521916,
    },
    {
      img: 'https://links.papareact.com/6as',
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian house",
      description: "1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine",
      star: 4.1,
      price: "S/ 30 / night",
      total: "S/ 117 Total",
      long: -0.069961,
      lat: 51.472618,
    },
    {
      img: 'https://links.papareact.com/xqj',
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian house",
      description: "1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine",
      star: 4.73,
      price: "S/ 30 / night",
      total: "S/ 117 Total",
      long: -0.0022275,
      lat: 51.5421655,
    }
  ];

  console.log('searchResults -> ', searchResults);

  return (
    <div className="h-screen">
      <Header placeHolder={`${location} | ${formattedDate} | ${guests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300 + Events - {formattedDate} - for {guests} number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Best results of {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Djs</p>
            <p className="button">Price</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {
              searchResults?.map((item: any, index: number) => (
                <InfoCard key={`searchResult-${item.lat}-${index}`}
                  image={item.img}
                  location={item.location}
                  title={item.title}
                  description={item.description}
                  star={item.star}
                  price={item.price}
                  total={item.total}
                />
              ))
            }
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  // const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
  return {
    props: {
      // searchResults
    }
  }
}