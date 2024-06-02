import { Skeleton } from "@/components/ui/skeleton";

export default function HomePageLoading() {
  return (
    <div className="mx-auto mt-10 w-[75%]">
      <Skeleton className="h-4 w-1/3"></Skeleton>
      <Skeleton className="w-full h-550px mt-5"></Skeleton>

      <div className="mt-8 flex justify-between gap-x-24">
        <div className="w-2/3">
          <Skeleton className="h-4 w-1/3"></Skeleton>
          <Skeleton className="h-4 w-1/3 mt-3"></Skeleton>
        </div>
        <div className="w-1/3">
          <Skeleton className="w-full"></Skeleton>
        </div>
      </div>
    </div>
  );
}
