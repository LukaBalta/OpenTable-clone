import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";
import Stars from "./Stars";

interface Props {
  restaurants: RestaurantCardType;
}

export default function RestaurantCard({ restaurants }: Props) {
  return (
    <div className="text-gray-800 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${restaurants.slug}`}>
        <img src={restaurants.main_image} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{restaurants.name}</h3>
          <div className="flex items-start">
            <Stars reviews={restaurants.reviews} />
            <p className="ml-2">
              {restaurants.reviews.length} review
              {restaurants.reviews.length === 1 ? "" : "s"}
            </p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{restaurants.cuisine.name}</p>
            <Price price={restaurants.price} />
            <p>{restaurants.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
