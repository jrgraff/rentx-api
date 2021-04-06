module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'rentx',
  entities: ['./src/modules/**/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};