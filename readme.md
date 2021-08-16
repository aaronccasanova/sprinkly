# Sprinkly

Playground for testing Lerna, Vite, and Vanilla Extract with Sprinkles.

## Initial setup (One time)

1. Initialize the repository by installing external dependencies and symlinking internal packages.

```sh
npm run initialize
```

2. Build every package in the monorepo.

```sh
npm run build
```

> Note: Run the following command if you add/remove any internal packages to ensure all symlinks are up to date.

```sh
npm run refresh
```

## Local development

Simply `cd` into the desired package and `npm run dev`

```sh
cd packages/client
npm run dev
```

> Note: All `dev` script run the package in watch mode.

Additionally, there are a few convenience scripts executable at the root of the monorepo for tasks such as running/developing all library packages in parallel and/or running the client site.

The following is an example of developing the libraries alongside the client:

```sh
# From the `/sprinkly` root
npm run dev:libs

# In another terminal
npm run dev:client
```

---

## Notes

Monorepo architecture was inspired by the following article and repo...
- https://letsdebug.it/post/12-monorepo-with-vue-vite-lerna/?ref=morioh.com
- https://bitbucket.org/letsdebugit/vite-monorepo-example/src/master/package.json

TODO:
- May want to set the version mode to independent...
  Investigate what makes the most sense for managing package deployments and release cadences
  * https://github.com/lerna/lerna#independent-mode
