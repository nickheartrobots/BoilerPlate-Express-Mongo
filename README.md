# Boiler Plate NodeJS App

## Getting started
To create a new project using this boiler plate app clone the git repository.

## Install Dependencies

```
npm install
```

## Environment Variables
Create a .env file in the root directory for environment variables and secrets such as the PORT variable or DB connection strings.  This file is ignored by git so the secrets don't end up in a public repository.

## Scripts

To run the production app use:

```
npm start
```

This will use Babel to transpile the code and output it to the dist/ folder and then run the app from there.  The bin/production script doesn't use dotenv to import any environment variables, so this should not be used to run locally.  Heroku will automatically run `npm start`.

To run the dev environment use:

```
npm run dev
```

This will use Nodemon to run the app from your source code.  It will use Babel to transpile the code on the fly and restart the app as you make changes.
