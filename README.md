# Fridgefy

Welcome to Fridgefy!
It is a web app that allows you to store your recipes and ingredients that you have in a fridge.
Recipes can be filtered by ingredients, cuisine, diet, intolerance, and more.

## Dates

- Apr 12, 2024 - Project Kickoff
- Apr 19, 2024 - Project Presentation

## Features

### All users

- [ ] Search for recipes with filters by cuisine, diet, intolerances, ingredients, and more. Add all supported values to the filters. You can find it in the API documentation.

### Only registered users

- [ ] Add ingredients to the fridge
- [ ] Add recipes to the wish list
- [ ] Make shopping list based on selected recipes
- [ ] Search for recipes based on ingredients in the fridge. Add a checkbox in the filter area to show only recipes with ingredients in the fridge.

## Pages

- [ ] Home / Hero page
- [ ] All Recipes page with search and filters
- [ ] Wish list page with shopping list

## API

- https://spoonacular.com/food-api

## Database

- Personalized fridge items and selected recipes are stored in any of the following database providers.
  - [json-server](https://www.npmjs.com/package/json-server)
  - [firebase](https://firebase.google.com/docs/database/rtdb-vs-firestore)
  - [supabase](https://supabase.com/database)
  - [neon](https://neon.tech/docs/connect/connect-from-any-app)
  - [vercel db](https://vercel.com/docs/storage/vercel-postgres)
  - [xata](https://xata.io/docs/postgres)
  - [nile](https://www.thenile.dev/docs/getting-started/languages/nextjs)

## Authentication

- SSO with Google or Github
  > Choose from any authentication providers you prefer such as:
  - Firebase Authentication
  - Supabase Authentication
  - Next Auth (Auth.js)
  - Clerk

### Side note for implementing other providers (NextAuth - Auth.js)

(Set up for Github Provider)[https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app]
(Set up for Google Provider (google docs))[https://support.google.com/cloud/answer/6158849?hl=en#zippy=%2Cauthorized-domains]

## Frontend

- Next JS or React JS
- Highly recommend to use Typescript (It would be a big plus for future)
- App Router (if Next JS is used)
- React Router (if Next JS is NOT used)
- Context API with/without useReducer (as necessary)
- Testing is not required

## Design Resources

- An initial wireframe is provided within the repository. It is just for you to reference, so you can come up with your own.

![sample](public/CICCC-React-Final.png)

- You can refer for design and UI components from:
  - Dribbble
  - Wix
  - Template monster

## Rules of GIT

- Never code on main
- Create a branch and work on your task
- Create PR, do PR reviews, and approve the PR before merging to the main branch
- Main branch should not be broken at anytime
- Conflicts happens time to time. It's a part of development. You are not doing anything wrong. There are ways of minimizing conflicts but you can never get rid of them.

## Team Workflow

### Format

- standup meetings: 5-10 minutes per day
- Yesterday I was working on ...
- Today I am working on ...
- I am stuck on / I am moving slow on..., would anyone want to pair with me to help?

### Dividing Tasks

- Design
- Frontend
- APIs
- Consider of using Github issue or Project management apps like Trello
- Pair programming (Take turns)

### Understand your data

- What is the data?
- What data do you need?
- What types of data do you need?
- How to store the data?
- Create the data flow

eg. search recipes -> fetch recipes -> display recipes -> add to My recipes (click event) -> store my recipes -> fetch my recipes (or manage state separately) -> display updated my recipes

### Set up your environment

- One member of the team will accept the midterm material and other two will join to the team
- One member of the team will create a slack channel where async discussion happening and invite the rest members plus include instructor in the channel.
- Create .env or .env.local (choose based on official documentation) file at the root of the project for the firebase project and spoonacular credentials, and add it to the .gitignore file (.env config)
- **MAKE SURE YOU DON'T PUSH THE .ENV FILE TO GITHUB**
- Push the initial commit to the repository
- Every member should clone the repository
- Every member should create their own branch

### Create the design

- Think about the UI and how would you split into components
- Create the wireframe (lo-fi, hi-fi)
- The more design, the faster you can build in development phase.

### Please keep in mind!!

- if something fails in your team, it is not one of your team member's failure but `WHOLE TEAM`.
- if you do not want to lead, `follow` the lead
- Decide as a team
- Be responsive - no longer than half day
- Please flag if you think you are behind
- If you stuck on a problem more than 1 hour, It is time to ask for help
- Take an action instead of keep thinking
