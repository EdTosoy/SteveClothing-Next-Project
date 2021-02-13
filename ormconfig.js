const rootDir = process.env.NODE_ENV === "development" ? "src" : "build";

module.exports = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: process.env.NODE_ENV === "development",
  entities: [rootDir + "/src/entities/**/*.ts"],
  migrations: [rootDir + "/src/migrations/**/*.ts"],
  subscribers: [rootDir + "/src/subscribers/**/*.ts"],
  cli: {
    entitiesDir: rootDir + "/entities",
    migrationsDir: rootDir + "/migrations",
    subscribersDir: rootDir + "/subscribers",
  },
};
