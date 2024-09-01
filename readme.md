# Software Engineering Students Association (SESA) Official Website

## Tech Stack

React
TypeScript
Next.js
TailwindCSS, DaisyUI

Terraform
Github Actions
Vercel

Eslint
Prettier

## Colours

Defined in tailwind.config.ts

- primary: "#00112b", // sesa navy
- secondary: "#49bfaa", // sesa teal dark
- accent: "#70c7b0", // sesa teal light

## Dev set up information

`npm i`

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

## Prettier

To run Prettier for formatting:

`npm run prettier`

## Annual Website Update Instructions

Each year, the only things that need to be updated are the current sponsors and the executive team.

### Updating the sponsors:

Sponsors are categorized into Gold and Silver levels. These are represented in the code by separate arrays in the sponsors.tsx file.

1. To locate the sponsors.tsx file go to `public/src/constants/sponsors.tsx`
2. To modify existing sponsors, update the name, logo, and link fields accordingly.
3. If there are new sponsors, add them to the array following the same structure as the existing entries under the corresponding gold/silver level. Add the new sponsor logos in the `public/sponsors-images` folder.

### Updating the executive team:

The executive team members are represented in the code by an array of objects within the TeamInfo constant in the teamInfo.tsx file.

1. To locate the teamInfo.tsx file go to `public/src/constants/teamInfo.tsx`
2. To update the details of an existing team member, find their corresponding object in the TeamInfo array.
3. If there are new members to add, insert a new object into the TeamInfo array following the same structure as the existing entries. Add the new team member photos in the `public/team-images` folder.
4. Update the `team_photo.png` every year with a new full team photo.
