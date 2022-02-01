# SocialAuth-frontend

## Overview
App mainly consists of two screens:
### Profile
User can see facebook email and can logout. App redirects to auth screen if user has not been authenticated.
### Auth
User can authenticate through facebook. App redirects to profile screen if user is already authenticated.

# Requirements
yarn or npm

# Installation
In the root directory (where package.json is located), run the following command:
`yarn` or `npm i`

## Development server

Run `yarn start` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` or `npm run bulid` to build the project. The build artifacts will be stored in the `dist/` directory.

## Environment Configuration
App uses firebase to handle facebook authentication.

Please update `src/environments/environment.ts` with the firebase config.
