import { Sequelize } from 'sequelize-typescript'
import path from 'path'
import env from '../config'

let sequelize: any
if (env.env === 'production') {
  console.log('Connected to Product DB')
  sequelize = new Sequelize({
    username: env.productDB.user,
    password: env.productDB.password,
    database: env.productDB.name,
    host: env.productDB.host,
    port: Number(env.productDB.port),
    dialect: 'sqlite',
    models: [path.join(__dirname, '../models')]
  })
} else if (env.env === 'develop') {
  console.log('Connected to Development DB')
  sequelize = new Sequelize({
    username: env.developmentDB.user,
    password: env.developmentDB.password,
    database: env.developmentDB.name,
    host: env.developmentDB.host,
    port: Number(env.developmentDB.port),
    dialect: 'sqlite',
    models: [path.join(__dirname, '../models')]
  })
} else {
    console.log('Connected to Local DB')
    sequelize = new Sequelize({
      storage: env.localDB.storage,
      dialect: 'sqlite',
      models: [path.join(__dirname, '../models')]
    })
}

// sequelize.sync({ alter: true })

export default sequelize;