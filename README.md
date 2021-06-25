# Yelp Roulette
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Table of Contents
* [Getting Started](#getting-started)
    * [Build Notes](#build-notes)
        * [Static Props](#static-props)
        * [Server Side Props](#server-side-props)
* [Learn More](#learn-more)
    * [Deploy on Vercel](#deploy-on-vercel)
## Getting Started
Setup the git repo and boilerplate
'''
npx create-next-app yelp_roulette
git init
touch README.md .gitignore 
git remote add origin 
'''


Then run the development server:
```
npm run dev
```

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

---

### Build Notes
Created Components section to separate 
* dropdown selection 
* check query params - useRouter hook used to push "/" route if params are empty
* zip code inputs - uses getStaticProps


Then created pages for spin and Food
* food - useContext carries over postal code from home page, then useRouter to push category/place into spin page
* spin - uses getServerSideProps to get term and location and return props for spin function. 

#### Static Props

Example
```
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await res.json()

    return {
        props: { json }
    }
}
```

#### Server Side Props



---
# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
