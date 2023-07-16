# Material UI - Next.js App Router example in TypeScript

This is a [Next.js](https://nextjs.org/) project bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with Material UI installed.

## How to use

Download the example [or clone the repo](https://github.com/mui/material-ui):

Install dependencies and run:

```bash
# npm
npm install
npm run dev

# yarn
yarn
yarn dev

# pnpm
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This example uses [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts) to automatically optimize and load Roboto, a custom Google Font.

## Manual Setup

1. Install Dependencies

```json
"dependencies": {
    "@emotion/cache": "latest",
    "@emotion/react": "latest",
    "@emotion/styled": "latest",
    "@mui/icons-material": "latest",
    "@mui/material": "latest",
    // Other dependencies...
}
```

2. Copy the `components/ThemeRegistry/`, Add it to you `layout.tsx`

```jsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeRegistry>// Hello World</ThemeRegistry>
      </body>
    </html>
  );
}
```

## Learn More

To learn more about this example:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Customizing Material UI](https://mui.com/material-ui/customization/how-to-customize/) - approaches to customizing Material UI.
