import { createDescription } from "@/app/actions";
import { Counter } from "@/app/components/Counter";
import { CreationBottomBar } from "@/app/components/CreationBottomBar";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="mx-auto w-3/5">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Describe your home
        </h2>
      </div>
      <form action={createDescription}>
        <input type="hidden" name="homeId" value={params.id} />
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input
              name="title"
              required
              placeholder="short and ..."
              type="text"
            ></Input>
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              required
              placeholder="please describe your home..."
            ></Textarea>
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input
              name="price"
              required
              placeholder="price per night in USD"
              type="number"
              min={10}
            ></Input>
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Images</Label>
            <Input
              name="image"
              type="file"
              required
              className="cursor-pointer"
            ></Input>
          </div>
          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Guests</h3>
                  <p className="text-muted-foreground text-sm">
                    How many guests can your home accomodate?
                  </p>
                </div>
                <Counter name="guestCount"></Counter>
              </div>
            </CardHeader>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Rooms</h3>
                  <p className="text-muted-foreground text-sm">
                    How many rooms does your home have?
                  </p>
                </div>
                <Counter name="roomCount"></Counter>
              </div>
            </CardHeader>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Bathrooms</h3>
                  <p className="text-muted-foreground text-sm">
                    How many bathrooms does your home have?
                  </p>
                </div>
                <Counter name="bathroomCount"></Counter>
              </div>
            </CardHeader>
          </Card>
        </div>
        <CreationBottomBar></CreationBottomBar>
      </form>
    </>
  );
}
