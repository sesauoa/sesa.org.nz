# Software Engineering Students Association (SESA) Official Website

## Tech Stack

React, TypeScript, Next.js, TailwindCSS

## Annual Website Update Instructions

Each year, please update:

- Sponsors
- Executive team
- Sign up form
- Statistics
- Photos

### Updating sponsors:

1. Go to `src/data/sponsors.tsx`
2. Update the name, logo, and link fields accordingly.
3. If there are new sponsors, add them to the array following the same structure as the existing entries under the corresponding gold/silver level. Add the new sponsor logos in the `public/sponsors-images` folder.

### Updating the executive team:

1. Go to `src/data/teamInfo.tsx`
2. To update the details of an existing team member, find their corresponding object in the TeamInfo array.
3. If there are new members to add, insert a new object into the TeamInfo array following the same structure as the existing entries. Add the new team member photos in the `public/team-images` folder.
4. Update the `team_photo.png` every year with a new full team photo.

### Updating the sign up form:

1. Go to `src/data/form.tsx`
2. Replace the `iframe src` with the new link to the Google Form sign up form.

### Updating the statistics:

1. Go to `src/data/statistics.tsx`
2. Update the statistics with the new numbers for the year.

### Updating the images header slideshow:

1. To update the images, add the new files in the `public/header-images` folder.

## SESA Colours

Defined in `tailwind.config.ts`

```
sesa-navy: "#00112b",
sesa-teal-dark: "#49bfaa",
sesa-teal-light: "#70c7b0",
```

## To run the locally

First, set up the local server:

`npm i`

Then, run the development server:

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
