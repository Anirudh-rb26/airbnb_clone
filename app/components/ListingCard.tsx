import Image from "next/image";
import Link from "next/link";
import { useCountries } from "../lib/getCountries";
import {
  AddToFavouriteButton,
  DeleteFromFavouriteButton,
} from "./SubmitButton";
import { addToFavourite, deleteFromFavourite } from "../actions";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
  userId: string | undefined;
  isInFavouriteList: boolean;
  favouriteId: string;
  homeId: string;
  pathName: string;
}

export function ListingCard({
  description,
  imagePath,
  location,
  price,
  userId,
  favouriteId,
  isInFavouriteList,
  homeId,
  pathName,
}: iAppProps) {
  const { getCountrybyValue } = useCountries();
  const country = getCountrybyValue(location);
  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://jutduzzjlkwghvdvefsa.supabase.co/storage/v1/object/public/images/${imagePath}`}
          alt="Image of a house"
          fill
          className="rounded-lg h-full object-cover"
        ></Image>

        {userId && (
          <div className="z-10 absolute top-2 right-2">
            {isInFavouriteList ? (
              <form action={deleteFromFavourite}>
                <input type="hidden" name="favouriteId" value={favouriteId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavouriteButton></DeleteFromFavouriteButton>
              </form>
            ) : (
              <form action={addToFavourite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavouriteButton></AddToFavouriteButton>
              </form>
            )}
          </div>
        )}
      </div>
      <Link href={`/home/${homeId}`} className="mt-3">
        <h3 className="font-medium text-base">
          {country?.label} / {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">${price}</span> a night
        </p>
      </Link>
    </div>
  );
}
