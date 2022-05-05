import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "rentx",
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    entities: [
        "./src/modules/cars/infra/typeorm/entities/*.ts",
        "./src/modules/cars/entities/*.ts",
        "./src/modules/accounts/entities/*.ts",
    ],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })