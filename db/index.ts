const debug = require('debug')('sql');
import * as chalk from 'chalk';
import * as Sequelize from 'sequelize';
const pkg = require('../package.json');

const name = process.env.DATABASE_NAME || pkg.name;

const url = process.env.DATABASE_URL || `postgres://localhost:5432/${name}`;

interface TSSequelize extends Sequelize.Sequelize {
  didSync: boolean;
}

class TSSequelize {
  constructor(sequelize: Sequelize.Sequelize) {
    Object.assign(this, sequelize);
  }
}

console.log(chalk.yellow(`Opening database connection to ${url}${name}`));

// create the database instance
export const db = new TSSequelize(new Sequelize(url, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  define: {
    freezeTableName: true,   // don't change table names from the one specified
    timestamps: true,        // automatically include timestamp columns
  },
}));

// pull in our models
require('./models');

// sync the db, creating it if necessary
(function sync(retries = 0, maxRetries = 5) {
  return db.sync({ force: false })
    .then(ok => console.log(`Synced models to db ${url}`))
    .catch((fail) => {
      console.log(fail);
    });
})();

declare global {
  type SequelizeAttributes<T extends { [key: string]: any }> = {
    [P in keyof T]: string | Sequelize.DataTypeAbstract | Sequelize.DefineAttributeColumnOptions;
  };
}
