## TypeScript Fullstack

## Getting Started
I wanted to build a fullstack application using TypeScript, and found some trouble finding a ready-made boilerplate. So now I'm sharing my attempt at a fullstack TypeScript starter app! This is a boilerplate that uses TypeScript for the full stack, using React, Redux, Webpack, Node, Express, and PostgreSQL (Sequelize). Testing is done with Jest, Enzyme, Faker, and SuperTest.

Definitely still a work in progress :)

### Prequesites
- Node 10.1*
- Yarn 1.6*
- PostgreSQL 10.3* (with a database named after the project)

### Installing
How to get a development env running

1. Download repo
2. Run `yarn` to add dependencies
3. Run `npm run fix` to fix some typings issues for redux-thunk and redux-devtools-extension
5. Run `npm start`, and you should be able to now dev your project!

### Development Notes
- Update `client/public` folder to reflect new app
- Build app through `server`, `client`, and `db`

## What's in This Repo
- client - where the frontend code lives
- config - where configuration code lives, which right now is just webpack and jest config
- db - this is where the database layer lives
- scripts - scripts to be run with npm are here
- server - where the server code lives
- tests - where our tests can cleanly live, otherwise they can sit by the side of the code they're testing

## Testing
TODO

## Author
- Alec Tietjens

## License
TODO

## Acknowledgements
TODO

## Todos
- Add a test endpoint to utilize full integration of backend
- Support GraphQL
- Unit test frontend
- Unit test server
- Write integration test
- Clean dependencies
- Clean gitignore
