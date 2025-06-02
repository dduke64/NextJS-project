## Welcome to my app

It is a Next.js application that utilized Prisma and SQLite as a local database. It's goal is to showcase a few of the features available in Next.js as well as how to navigate some of it's nuance. 

### Features:
* Client-side counter: This is a simple useState page with a counter that works on client side
* API calls Drinks: This page makes a call to a free drinks API, and displays the response in a simple two column grid. Clicking on a single drink takes you to a page that shows dynamic routing.
* RUD tasks: This page uses Prisma and SQLite to create a simple to-do list that you can add, edit, and delete from. The edit button also takes you to a individual task page showcasing dynamic routes again.
* Parallel with PPR: This page has three slots, two of which are static and one is dynamic. Showcasing Parallel routing and Partial Pre-rendering all in one. The number of notifications is from an API and changes every refresh.
