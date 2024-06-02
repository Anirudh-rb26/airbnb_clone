import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NoItems } from "../components/NoItems";
import { ListingCard } from "../components/ListingCard";

async function getData(userId: string) {
  const data = await prisma?.favourite.findMany({
    where: {
      userId: userId,
    },
    select: {
      Home: {
        select: {
          photo: true,
          id: true,
          Favourite: true,
          price: true,
          country: true,
          description: true,
        },
      },
    },
  });

  return data;
}

export default async function FavouriteRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect("/");

  const data = await getData(user.id);

  return (
    <section className="mx-auto container py-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Your Favourites</h2>
      {data?.length === 0 ? (
        <NoItems
          title="Hey, you do not have any Favourites"
          description="please add favourites to view them here..."
        ></NoItems>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
          {data?.map((item) => (
            <ListingCard
              key={item.Home?.id}
              description={item.Home?.description as string}
              location={item.Home?.country as string}
              pathName={"/favourites"}
              homeId={item.Home?.id as string}
              imagePath={item.Home?.photo as string}
              price={item.Home?.price as number}
              userId={user.id}
              favouriteId={item.Home?.Favourite[0].id as string}
              isInFavouriteList={
                (item.Home?.Favourite.length as number) > 0 ? true : false
              }
            ></ListingCard>
          ))}
        </div>
      )}
    </section>
  );
}
