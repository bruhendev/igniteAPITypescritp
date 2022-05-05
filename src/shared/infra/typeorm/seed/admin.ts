import { hash } from "bcrypt";
import { AppDataSource } from "../data-source"

async function create() {

    const dataSource = AppDataSource;
    const password = await hash('admin', 8);
    // const now = new Date().toJSON().slice(0, 19).replace('T', ' ')

    await dataSource.query(
        `insert into users (name, email, password, isAdmin, created_at, driver_license)
            values ('admin', 'admin@email.com', '${password}', true, NOW(), '978465321')
        `);
}

create().then(() => console.log("User admin created!"));