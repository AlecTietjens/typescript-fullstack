import * as Sequelize from 'sequelize';
import { db }  from './..';

interface HelloInstance {}

interface HelloAttributes {
  id: string;
  status?: string;
}

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<HelloAttributes> = {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'READ',
    },
  };
  return sequelize.define<HelloInstance, HelloAttributes>('hello', attributes);
};
