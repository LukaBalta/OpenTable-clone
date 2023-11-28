import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { Cuisine, PRICE, PrismaClient, Location, Review } from "@prisma/client";

const prisma = new PrismaClient();
export interface RestaurantCardType {
  id: number;
  name: string;
  slug: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  reviews: Review[];
}

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
    },
  });

  return restaurants;
};

export default async function Home({ name }: { name: string }) {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header name={name} />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurants={restaurant} />
        ))}
      </div>
    </main>
  );
}

//%Z~39Jwx2QwnBEj
