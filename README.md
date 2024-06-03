This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Features
### User Experience
- **Loading Skeleton**: Every page includes a pending state that displays a loading skeleton until the page fully loads, ensuring a smooth user experience.

### Search and Filter
- **Search for Homes**: Users can search for homes based on location, number of rooms, and number of guests.
- **Sort by Category**: Homes can be sorted through various categories for easier browsing.

### User Authentication
- **Login and Logout**: Secure login and logout functionality using Kinde, ensuring user data privacy and security.
- **Restricted Actions**: Users must be logged in to favourite homes, create new listings, or make reservations.

### Home Listings
- **Create Listings**: Logged-in users can create new home listings with detailed information.
- **Add to Favourites**: Homes can be added to and removed from a list of favourites for quick access.

### Reservations
- **Checkout**: Users can checkout their reservations, listings, and favourites in an organized manner.
- **Reserve Bookings**: Users can reserve bookings, and once a slot is reserved, it is unavailable to other users, preventing double bookings.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
