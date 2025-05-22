import client from "./client.js";
import { createEmployee } from "./employees.js";

async function seedDB(){
    await client.connect()

    await createEmployee("John Smith", '01-01-2000', 5)
    await createEmployee("Jane Doe", '01-01-2000', 1)
    await createEmployee("Jimbo", '01-01-2000', 10)

    await client.end()
}

seedDB()