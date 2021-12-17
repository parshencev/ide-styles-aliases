## Installation
`npm i -D ide-styles-aliases` or `yarn add -D ide-styles-aliases`

## What is it for

If you use [Create React App with TypeScript](https://create-react-app.dev/docs/adding-typescript/) and want to use [`compilerOptions.paths`](https://www.typescriptlang.org/tsconfig#paths) ([how it's possible](https://stackoverflow.com/questions/57070052/create-react-app-typescript-3-5-path-alias)) and project haven't webpack config file (project not ejected) and your IDE (like [WebStorm](https://www.jetbrains.com/webstorm/)) don't know how work with aliases from tsconfig in styles files (like [sass](https://sass-lang.com/)). For resolve this problem necessary create symbolic link to importable folder or file near style file. 

## How to use

terminal commands:

### `ide-styles-aliases [-w, --watch] [-t, --tsconfig <path/to/tsconfig.json>] [-s, --src <path/to/source>]`

Open tsconfig.json with extends and search all paths with styles file extensions (.css, .sass, .scss, ...etc). When search all styles files in your project and create symbolic links near them.\

#### `-t, --tsconfig <path/to/tsconfig.json>` optional

Path to tsconfig.json. Default `./tsconfig.json`

#### `-s, --src <path/to/source>` optional

Path to code source. Default all folders in `./` with ignore `./node_modules`

#### `-w, --watch` optional

Watch to tsconfig.json with extends and project files and add symbolic links automatically.

### Integrate in `package.json` scripts

For parallel run you can use [concurrently](https://www.npmjs.com/package/concurrently) 

example: 

```
{
  scripts: {
    "start": "concurrently --kill-others \"ide-styles-aliases -w\" \"craco start\"",
  },
}
```
