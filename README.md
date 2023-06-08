This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash 
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `page/index.tsx`. The page auto-updates as you edit the file.

## Generate GraphQL Types
This project uses graphql-generator to generate types along with query and mutation hooks.
All graphql related codes are stored inside `src/gql` directory

#### src/gql directory structure
- gql
- `gql/apollo` - this contains code for apollo client
- `gql/schema/fragments` - this contains all the graphql api request/response body
- `gql/schema/**/*.ts` - all query and mutation APIs are defined in these directories and files
- to generate the types and hooks, run the following command:
```bash 
pnpm gqlgen
```

## Modules
- All modules are kept inside `src/modules` directory

## Component Library
- This project uses [mantine](https://mantine.dev/) as component library.
- The theme and colors are defined inside `src/themes`
- The theme is wrapped to entire pages and body inside `src/app/layout.tsx`

#### Change component library
- One can also use MUI or Chakra as component library
- Update themes and modules with respected component library