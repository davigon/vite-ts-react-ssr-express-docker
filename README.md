# Vite Typescript React SSR Express Docker

A boilerplate with only the bare minimum of dependencies to make the following technologies work together:

- [Vite with SSR and HMR](https://vitejs.dev/guide/ssr.html)
- [Typescript 4.7](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/)
- [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Docker](https://www.docker.com/)

## Development

Use `npm run dev:server` or simply `npm run dev` to start the development server. Since we are using SSR, with the previous scripts you can start working on client and server, but if you prefer only work on the client, then use `npm run dev:client`.

Client start on port 3000 and server on port 4000.

## Production

The following build and start the proyect:

```
npm run build
npm start
```

Also you can just run `npm run serve`, witch combine the previous scripts.

## Docker

Configure docker-compose.yml file to suit your needs. Exposed port is 4000, but feel free to change it.