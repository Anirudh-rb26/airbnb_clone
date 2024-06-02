"use client";

import { Button } from "@/components/ui/button";
import { Divide, Heart, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function CreationSubmit() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled size="lg">
          <Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2>
          Please Wait
        </Button>
      ) : (
        <Button type="submit" size="lg">
          Next
        </Button>
      )}
    </>
  );
}

export function AddToFavouriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          className="bg-primary-foreground"
          variant={"outline"}
          size={"icon"}
          disabled
        >
          <Loader2 className="h-4 w-4 animate-spin text-primary"></Loader2>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="bg-primary-foreground"
          type="submit"
        >
          <Heart className="w-4 h-4"></Heart>
        </Button>
      )}
    </>
  );
}

export function DeleteFromFavouriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          className="bg-primary-foreground"
          variant={"outline"}
          size={"icon"}
          disabled
        >
          <Loader2 className="h-4 w-4 animate-spin text-primary"></Loader2>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="bg-primary-foreground"
          type="submit"
        >
          <Heart className="w-4 h-4 text-primary" fill="#e21c49"></Heart>
        </Button>
      )}
    </>
  );
}

export function SubmitReservation() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="w-full" disabled>
          <Loader2 className="w-4 h-4 animate-spin mr-2"></Loader2>
          reserving your dates...
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          Make a Reservation
        </Button>
      )}
    </>
  );
}
